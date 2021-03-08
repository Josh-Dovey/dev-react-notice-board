const catchAsync = require("../utils/catchAsync");

// Direct API Communication Functions
exports.create = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
    });
  });

exports.edit = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.delete = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOneAndDelete({ slug: req.params.slug });

    if (!doc || doc === null) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

// Page Rendering Factory Functions
exports.getSchedule = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.findOne({ slug: req.params.slug }).select("-_id");

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://dev-notice-board.herokuapp.com/"
    );
    res.status(200).json(doc);
  });

exports.getMonth = (Model) =>
  catchAsync(async (req, res) => {
    const docs = await Model.find({ month: req.params.month })
      .sort("day")
      .select("-_id");

    // TODO: Change this to the public url for production
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://dev-notice-board.herokuapp.com/"
    );

    res.status(200).json(docs);
  });

exports.getResults = (Model) =>
  catchAsync(async (req, res) => {
    const docs = await Model.find()
      .sort({ year: 1, monthNum: 1, day: 1 })
      .select("month day year study slug -_id");

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://dev-notice-board.herokuapp.com/"
    );
    res.status(200).json(docs);
  });

exports.getCreateForm = (type) => (req, res) => {
  res.status(200).render(`create${type}`, {
    className: "2",
    activeNav: 4,
    title: `Create a ${type} Schedule`,
    nav: true,
  });
};

exports.getEditForm = (Model, type) =>
  catchAsync(async (req, res) => {
    const doc = await Model.findOne({ slug: req.params.slug }).select("-_id");

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://dev-notice-board.herokuapp.com/"
    );
    res.status(200).render(`edit${type}`, {
      className: "2",
      activeNav: 4,
      title: `Edit ${type}`,
      nav: true,
      data: doc,
    });
  });
