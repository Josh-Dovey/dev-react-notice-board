// FIXME: !WARNING! FIXME:
// CREATE ALL ADMINS AND THE STANDARD USER PROFILE BEFORE DEPLOYMENT
// REMOVE SIGNUP FUNCTIONALITY BEFORE DEPLOYING TO THE WEB

const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const enforce = require("express-sslify");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const thursdayRouter = require("./routes/thursdayRoutes");
const sundayRouter = require("./routes/sundayRoutes");

// Updated app
const app = express();

app.enable("trust proxy");

const path = __dirname + "/client/build";

// Serving the static files (React app)
app.set("view engine", "html");
app.use(express.static(path));

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.options("*", cors());

// Set security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from the same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Read data from body and cookies for the app
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

app.use(compression());

// ROUTES
app.use("/api/user", userRouter);
app.use("/api/thursday", thursdayRouter);
app.use("/api/sunday", sundayRouter);

app.get("*", (req, res) => {
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
