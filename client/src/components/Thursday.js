import { useState } from "react";

import axios from "axios";
import { Link, Redirect } from "react-router-dom";

function Thursday({ doc, user, showOptions }) {
  const [popup, setPopup] = useState(false);
  const [success, setSuccess] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const openPopup = () => setPopup(true);
  const closePopup = () => setPopup(false);

  const deleteDoc = async () => {
    try {
      await axios({
        method: "DELETE",
        url: `/api/thursday/${doc.slug}`,
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
      {redirect ? <Redirect to="/schedules/thursday" /> : ""}
      <div
        className={success ? "success message" : "error message"}
        style={{ display: success || success === false ? "block" : "none" }}
      >
        {success ? "Schedule deleted" : "An error occured"}
      </div>
      {doc.event.includes("Assembly") ? (
        <div className="schedule schedule--view">
          <div className="schedule__general schedule__general--view">
            <span className="schedule__details">
              {doc.event === "Circuit Overseer's Visit"
                ? `Tuesday `
                : `Thursday `}
              {doc.month} {doc.day} {doc.year} ({doc.study})
            </span>
            <span className="schedule__chairman">Chairman {doc.chairman}</span>
          </div>
          <div className="event">No midweek meeting due to the {doc.event}</div>
        </div>
      ) : (
        <div className="schedule schedule--view">
          <div className="schedule__general schedule__general--view">
            <span className="schedule__details">
              {doc.event === "Circuit Overseer's Visit"
                ? `Tuesday `
                : `Thursday `}
              {doc.month} {doc.day} {doc.year} ({doc.study})
            </span>
            <span className="schedule__chairman">Chairman {doc.chairman}</span>
          </div>
          {/* Info Rows */}
          <div className="row schedule__row grid">
            <div className="schedule__time">7:00</div>
            <div className="schedule__title">Song {doc.song1}</div>
            <div className="schedule__random">Prayer:</div>
            <div className="schedule__bro-sis">{doc.openPrayer}</div>
          </div>

          <div className="row schedule__row grid">
            <div className="schedule__time">7:05</div>
            <div className="schedule__title">Opening Comments</div>
            <div className="schedule__random">Chairman:</div>
            <div className="schedule__bro-sis">{doc.chairman}</div>
          </div>

          {/* Treasures */}
          <div className="section treasures">Treasures from God's Word</div>

          <div className="row schedule__row grid">
            <div className="schedule__time">7:06</div>
            <div className="schedule__title">{doc.treasures} (10 mins)</div>
            <div className="schedule__random">Brother:</div>
            <div className="schedule__bro-sis">{doc.treasuresBro}</div>
          </div>

          <div className="row schedule__row grid">
            <div className="schedule__time">7:16</div>
            <div className="schedule__title">
              Digging For Spiritual Gems (10 mins)
            </div>
            <div className="schedule__random">Brother:</div>
            <div className="schedule__bro-sis">{doc.diggingBro}</div>
          </div>

          <div className="row schedule__row grid">
            <div className="schedule__time">7:26</div>
            <div className="schedule__title">
              Bible Reading (4 mins or less)
            </div>
            <div className="schedule__random">Student:</div>
            <div className="schedule__bro-sis">{doc.bibleReading}</div>
          </div>

          {/* School */}
          <div className="section school">
            Apply Yourself to Reading and Teaching
          </div>

          {doc.school1 === "Apply Yourself to Reading and Teaching" ||
          doc.school1 === "Initial Call Video" ||
          doc.school1 === "Return Visit Video" ? (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time1}</div>
              <div className="schedule__title">{doc.school1}</div>
              <div className="schedule__random">Chairman:</div>
              <div className="schedule__bro-sis">{doc.chairman}</div>
            </div>
          ) : (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time1}</div>
              <div className="schedule__title">{doc.school1}</div>
              <div className="schedule__random">Student/Assistant:</div>
              <div className="schedule__bro-sis">
                {doc.student1} / {doc.assistant1}
              </div>
            </div>
          )}

          {doc.school2 === "Student Talk" ? (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time2}</div>
              <div className="schedule__title">{doc.school2}</div>
              <div className="schedule__random">Student:</div>
              <div className="schedule__bro-sis">{doc.student2}</div>
            </div>
          ) : (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time2}</div>
              <div className="schedule__title">{doc.school2}</div>
              <div className="schedule__random">Student/Assistant:</div>
              <div className="schedule__bro-sis">
                {doc.student2} / {doc.assistant2}
              </div>
            </div>
          )}

          {doc.school3 && doc.student3 ? (
            doc.school3 === "Student Talk" ? (
              <div className="row schedule__row grid">
                <div className="schedule__time">{doc.time3}</div>
                <div className="schedule__title">{doc.school3}</div>
                <div className="schedule__random">Student:</div>
                <div className="schedule__bro-sis">{doc.student3}</div>
              </div>
            ) : (
              <div className="row schedule__row grid">
                <div className="schedule__time">{doc.time3}</div>
                <div className="schedule__title">{doc.school3}</div>
                <div className="schedule__random">Student/Assistant:</div>
                <div className="schedule__bro-sis">
                  {doc.student3} / {doc.assistant3}
                </div>
              </div>
            )
          ) : (
            <div className="row grid none"></div>
          )}

          {doc.school4 && doc.student4 ? (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time4}</div>
              <div className="schedule__title">{doc.school4}</div>
              <div className="schedule__random">Student/Assitant:</div>
              <div className="schedule__bro-sis">
                {doc.student4} / {doc.assistant4}
              </div>
            </div>
          ) : (
            <div className="row grid none"></div>
          )}

          {/* Living */}
          <div className="section living">Living as Christians</div>

          <div className="row schedule__row grid">
            <div className="schedule__time">{doc.time5}</div>
            <div className="schedule__title">Song {doc.song2}</div>
            <div className="schedule__random"></div>
            <div className="schedule__bro-sis"></div>
          </div>

          <div className="row schedule__row grid">
            <div className="schedule__time">{doc.time6}</div>
            <div className="schedule__title">{doc.living1}</div>
            <div className="schedule__random">Brother:</div>
            <div className="schedule__bro-sis">{doc.living1Bro}</div>
          </div>

          {!doc.time7 && !doc.living2 && !doc.living2Bro ? (
            <div className="row grid none"></div>
          ) : (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time7}</div>
              <div className="schedule__title">{doc.living2}</div>
              <div className="schedule__random">Brother:</div>
              <div className="schedule__bro-sis">{doc.living2Bro}</div>
            </div>
          )}

          {doc.event === "Circuit Overseer's Visit" && (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time9}</div>
              <div className="schedule__title">
                Concluding Comments (3 mins or less)
              </div>
              <div className="schedule__random">Chairman:</div>
              <div className="schedule__bro-sis">{doc.chairman}</div>
            </div>
          )}
          {doc.event === "Circuit Overseer's Visit" && (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time8}</div>
              <div className="schedule__title">Circuit Overseer's Talk</div>
              <div className="schedule__random">Brother:</div>
              <div className="schedule__bro-sis">Circuit Overseer</div>
            </div>
          )}
          {doc.event === "Circuit Overseer's Visit" && (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time10}</div>
              <div className="schedule__title">Song</div>
              <div className="schedule__random">Prayer:</div>
              <div className="schedule__bro-sis">Circuit Overseer</div>
            </div>
          )}
          {doc.event === "" && (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time8}</div>
              <div className="schedule__title">
                Congregation Bible Study (30 mins)
              </div>
              <div className="schedule__random">Conductor:</div>
              <div className="schedule__bro-sis">{doc.conductor}</div>
            </div>
          )}

          {doc.event === "" && (
            <div className="row schedule__row grid">
              <div className="schedule__time"></div>
              <div className="schedule__title"></div>
              <div className="schedule__random">Reader:</div>
              <div className="schedule__bro-sis">{doc.reader}</div>
            </div>
          )}

          {doc.event === "" && (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time9}</div>
              <div className="schedule__title">
                Concluding Comments (3 mins or less)
              </div>
              <div className="schedule__random">Chairman:</div>
              <div className="schedule__bro-sis">{doc.chairman}</div>
            </div>
          )}
          {doc.event === "" && (
            <div className="row schedule__row grid">
              <div className="schedule__time">{doc.time10}</div>
              <div className="schedule__title">Song {doc.song3}</div>
              <div className="schedule__random">Prayer:</div>
              <div className="schedule__bro-sis">{doc.closingPrayer}</div>
            </div>
          )}
        </div>
      )}
      {user.role === "admin" && showOptions === true ? (
        <div className="row--flex">
          <Link to={`/edit/thursday/${doc.slug}`} className="btn btn--edit">
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

export default Thursday;
