import { useState } from "react";

import axios from "axios";
import { Link, Redirect } from "react-router-dom";

function Sunday({ doc, user, showOptions }) {
  const [popup, setPopup] = useState(false);
  const [success, setSuccess] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const openPopup = () => setPopup(true);
  const closePopup = () => setPopup(false);

  const deleteDoc = async () => {
    try {
      await axios({
        method: "DELETE",
        url: `/api/sunday/${doc.slug}`,
      });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(null);
        setRedirect(true);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {redirect ? <Redirect to="/schedules/sunday" /> : ""}
      <div
        className={success ? "success message" : "error message"}
        style={{ display: success || success === false ? "block" : "none" }}
      >
        {success ? "Schedule deleted" : "An error occured"}
      </div>
      {doc.event && doc.event.includes("Assembly") ? (
        <div className="schedule schedule--view">
          <div className="schedule__general schedule__general--view">
            <span className="schedule__details">
              Sunday {doc.month} {doc.day} {doc.year}
            </span>
            <span className="schedule__chairman">Chairman: {doc.chairman}</span>
          </div>
          <div className="event">{doc.event}</div>
        </div>
      ) : (
        <div className="schedule schedule--view">
          <div className="schedule__general schedule__general--view">
            <span className="schedule__details">
              Sunday {doc.month} {doc.day} {doc.year}
            </span>
            <span className="schedule__chairman">Chairman: {doc.chairman}</span>
          </div>
          <div className="row schedule__row grid">
            <div className="schedule__time">{doc.time1}</div>
            <div className="schedule__title">Song {doc.song1}</div>
            <div className="schedule__random">Prayer:</div>
            <div className="schedule__bro-sis">{doc.chairman}</div>
          </div>
          <div className="row schedule__row grid">
            <div className="schedule__time">{doc.time2}</div>
            <div className="schedule__title">{doc.publicTalk}</div>
            <div className="schedule__random">Brother:</div>
            <div className="schedule__bro-sis">{doc.publicTalkBro}</div>
          </div>
          <div className="row schedule__row grid">
            <div className="schedule__time">{doc.time3}</div>
            <div className="schedule__title">Song {doc.song2}</div>
            <div className="schedule__random"></div>
            <div className="schedule__bro-sis"></div>
          </div>
          <div className="row schedule__row grid">
            <div className="schedule__time">{doc.time4}</div>
            <div className="schedule__title">
              Bible Study through Watchtower
            </div>
            <div className="schedule__random">Conductor:</div>
            <div className="schedule__bro-sis">{doc.conductor}</div>
          </div>
          <div className="row schedule__row grid">
            <div className="schedule__time"></div>
            <div className="schedule__title"></div>
            <div className="schedule__random">Reader:</div>
            <div className="schedule__bro-sis">{doc.reader}</div>
          </div>
          <div className="row schedule__row grid">
            <div className="schedule__time">{doc.time5}</div>
            <div className="schedule__title">Song {doc.song3}</div>
            <div className="schedule__random">Prayer:</div>
            <div className="schedule__bro-sis">{doc.publicTalkBro}</div>
          </div>
        </div>
      )}
      {user.role === "admin" && showOptions === true ? (
        <div className="row--flex">
          <Link to={`/edit/sunday/${doc.slug}`} className="btn btn--edit">
            Edit
          </Link>
          <button
            id="deleteWarning"
            className="btn btn--delete"
            onClick={openPopup}
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
      {user.role === "admin" && showOptions === true ? (
        <div className="popup__bg" style={{ display: popup ? "grid" : "none" }}>
          <div className="popup__box">
            <h3>Are you sure you want to delete this schedule?</h3>
            <div className="popup__btn-box">
              <button className="btn popup__btn" onClick={closePopup}>
                Go back
              </button>
              <button
                className="btn popup__btn btn--delete"
                onClick={deleteDoc}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Sunday;
