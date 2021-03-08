const Thursday = require("../models/thursdayModel");
const factory = require("./handlerFactory");

exports.getResults = factory.getResults(Thursday);
exports.getMonth = factory.getMonth(Thursday);
exports.getSchedule = factory.getSchedule(Thursday);
exports.createThursday = factory.create(Thursday);
exports.editThursday = factory.edit(Thursday);
exports.deleteThursday = factory.delete(Thursday);
