const mongoose = require("mongoose");

const thursdaySchema = new mongoose.Schema({
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
  study: String,
  chairman: String,
  song1: String,
  song2: String,
  song3: String,
  openPrayer: String,
  treasures: String,
  treasuresBro: String,
  diggingBro: String,
  bibleReading: String,
  school1: String,
  school2: String,
  school3: String,
  school4: String,
  student1: String,
  student2: String,
  student3: String,
  student4: String,
  assistant1: String,
  assistant2: String,
  assistant3: String,
  assistant4: String,
  living1: String,
  living2: String,
  living1Bro: String,
  living2Bro: String,
  conductor: String,
  reader: String,
  closingPrayer: String,
  time1: String,
  time2: String,
  time3: String,
  time4: String,
  time5: String,
  time6: String,
  time7: String,
  time8: String,
  time9: String,
  time10: String,
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

thursdaySchema.pre("save", function (next) {
  this.slug = `${this.month.toLowerCase()}-${this.day}-${this.year}`;
  next();
});

thursdaySchema.pre("save", function (next) {
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

const Thursday = mongoose.model("Thursday", thursdaySchema);

module.exports = Thursday;
