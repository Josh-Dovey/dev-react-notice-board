import React from "react";
import { Link } from "react-router-dom";
import { Folder } from "react-feather";

function QuickBox({ type, addMonth }) {
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date().getMonth() + addMonth;
  let n;
  d === 12 ? (n = 0) : (n = d);
  d === 13 ? (n = 1) : (n = d);
  const month = monthArr[n];
  const shortMonth = month.substring(0, 3);
  return (
    <Link to={`schedules/${type}/month/${month}`} className="quick__box">
      <Folder className="quick__icon" />
      <span className="quick__date">{shortMonth}</span>
    </Link>
  );
}

export default QuickBox;
