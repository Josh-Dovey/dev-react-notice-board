const mongoose = require("mongoose");

const sundaySchema = new mongoose.Schema({
  event: String,
  month: {
    type: String,
    required: [true, "Month required"],
  },
  day: {
    type: Number,
    required: [true, "Day required"],
  },
  year: {
    type: Number,
    required: [true, "Year required"],
  },
  chairman: String,
  openPrayer: String,
  publicTalk: String,
  publicTalkBro: String,
  conductor: String,
  reader: String,
  time1: String,
  time2: String,
  time3: String,
  time4: String,
  time5: String,
  song1: String,
  song2: String,
  song3: String,
  closingPrayer: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  slug: {
    type: String,
    unique: true,
  },
  monthNum: Number,
});

sundaySchema.pre("save", function (next) {
  this.slug = `${this.month.toLowerCase()}-${this.day}-${this.year}`;
  next();
});

sundaySchema.pre("save", function (next) {
  if (this.month === "January") this.monthNum = 1;
  else if (this.month === "February") this.monthNum = 2;
  else if (this.month === "March") this.monthNum = 3;
  else if (this.month === "April") this.monthNum = 4;
  else if (this.month === "May") this.monthNum = 5;
  else if (this.month === "June") this.monthNum = 6;
  else if (this.month === "July") this.monthNum = 7;
  else if (this.month === "August") this.monthNum = 8;
  else if (this.month === "September") this.monthNum = 9;
  else if (this.month === "October") this.monthNum = 10;
  else if (this.month === "November") this.monthNum = 11;
  else if (this.month === "December") this.monthNum = 12;
  next();
});

const Sunday = mongoose.model("Sunday", sundaySchema);

module.exports = Sunday;
