const Sunday = require("../models/sundayModel");
const factory = require("./handlerFactory");

exports.getResults = factory.getResults(Sunday);
exports.getMonth = factory.getMonth(Sunday);
exports.getSchedule = factory.getSchedule(Sunday);
exports.createSunday = factory.create(Sunday);
exports.editSunday = factory.edit(Sunday);
exports.deleteSunday = factory.delete(Sunday);
