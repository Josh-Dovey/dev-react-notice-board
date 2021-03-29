import React from "react";
import { Link } from "react-router-dom";

function Thursday({ schedule }) {
  return (
    <div>
      <div className="schedule schedule--view">
        {/* Overview */}
        <div className="schedule__general schedule__general--view">
          {schedule.event === "Circuit Overseer's Visit" ? (
            <span className="schedule__details">
              Tuesday {schedule.month} {schedule.day} {schedule.year} (
              {schedule.study})
            </span>
          ) : (
            <span className="schedule__details">
              Thursday {schedule.month} {schedule.day} {schedule.year} (
              {schedule.study})
            </span>
          )}

          <span className="schedule__chairman">
            Chairman {schedule.chairman}
          </span>
        </div>

        {schedule.event.includes("Assembly") && (
          <div className="event">
            No midweek meeting due to the ${schedule.event}
          </div>
        )}

        {/* Info Rows */}
        <div className="row schedule__row grid">
          <div className="schedule__time">7:00</div>
          <div className="schedule__title">Song {schedule.song1}</div>
          <div className="schedule__random">Prayer:</div>
          <div className="schedule__bro-sis">{schedule.openPrayer}</div>
        </div>

        <div className="row schedule__row grid">
          <div className="schedule__time">7:05</div>
          <div className="schedule__title">Opening Comments</div>
          <div className="schedule__random">Chairman:</div>
          <div className="schedule__bro-sis">{schedule.chairman}</div>
        </div>

        {/* Treasures */}
        <div className="section treasures">Treasures from God's Word</div>

        <div className="row schedule__row grid">
          <div className="schedule__time">7:06</div>
          <div className="schedule__title">{schedule.treasures} (10 mins)</div>
          <div className="schedule__random">Brother:</div>
          <div className="schedule__bro-sis">{schedule.treasuresBro}</div>
        </div>

        <div className="row schedule__row grid">
          <div className="schedule__time">7:16</div>
          <div className="schedule__title">
            Digging For Spiritual Gems (10 mins)
          </div>
          <div className="schedule__random">Brother:</div>
          <div className="schedule__bro-sis">{schedule.diggingBro}</div>
        </div>

        <div className="row schedule__row grid">
          <div className="schedule__time">7:26</div>
          <div className="schedule__title">Bible Reading (4 mins or less)</div>
          <div className="schedule__random">Student:</div>
          <div className="schedule__bro-sis">{schedule.bibleReading}</div>
        </div>

        {/* School */}
        <div className="section school">
          Apply Yourself to Reading and Teaching
        </div>

        {schedule.school1 === "Apply Yourself to Reading and Teaching" ||
        schedule.school1 === "Initial Call Video" ||
        schedule.school1 === "Return Visit Video" ? (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time1}</div>
            <div className="schedule__title">{schedule.school1}</div>
            <div className="schedule__random">Chairman:</div>
            <div className="schedule__bro-sis">{schedule.chairman}</div>
          </div>
        ) : (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time1}</div>
            <div className="schedule__title">{schedule.school1}</div>
            <div className="schedule__random">Student/Assistant:</div>
            <div className="schedule__bro-sis">
              {schedule.student1} / {schedule.assistant1}
            </div>
          </div>
        )}

        {schedule.school2 === "Student Talk" ? (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time2}</div>
            <div className="schedule__title">{schedule.school2}</div>
            <div className="schedule__random">Student:</div>
            <div className="schedule__bro-sis">{schedule.student2}</div>
          </div>
        ) : (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time2}</div>
            <div className="schedule__title">{schedule.school2}</div>
            <div className="schedule__random">Student/Assistant:</div>
            <div className="schedule__bro-sis">
              {schedule.student2} / {schedule.assistant2}
            </div>
          </div>
        )}

        {schedule.school3 && schedule.student3 ? (
          schedule.school3 === "Student Talk" ? (
            <div className="row schedule__row grid">
              <div className="schedule__time">{schedule.time3}</div>
              <div className="schedule__title">{schedule.school3}</div>
              <div className="schedule__random">Student:</div>
              <div className="schedule__bro-sis">{schedule.student3}</div>
            </div>
          ) : (
            <div className="row schedule__row grid">
              <div className="schedule__time">{schedule.time3}</div>
              <div className="schedule__title">{schedule.school3}</div>
              <div className="schedule__random">Student/Assistant:</div>
              <div className="schedule__bro-sis">
                {schedule.student3} / {schedule.assistant3}
              </div>
            </div>
          )
        ) : (
          <div className="row grid none"></div>
        )}

        {schedule.school4 && schedule.student4 ? (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time4}</div>
            <div className="schedule__title">{schedule.school4}</div>
            <div className="schedule__random">Student/Assitant:</div>
            <div className="schedule__bro-sis">
              {schedule.student4} / {schedule.assistant4}
            </div>
          </div>
        ) : (
          <div className="row grid none"></div>
        )}

        {/* Living */}
        <div className="section living">Living as Christians</div>

        <div className="row schedule__row grid">
          <div className="schedule__time">{schedule.time5}</div>
          <div className="schedule__title">Song {schedule.song2}</div>
          <div className="schedule__random"></div>
          <div className="schedule__bro-sis"></div>
        </div>

        <div className="row schedule__row grid">
          <div className="schedule__time">{schedule.time6}</div>
          <div className="schedule__title">{schedule.living1}</div>
          <div className="schedule__random">Brother:</div>
          <div className="schedule__bro-sis">{schedule.living1Bro}</div>
        </div>

        {!schedule.time7 && !schedule.living2 && !schedule.living2Bro ? (
          <div className="row grid none"></div>
        ) : (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time7}</div>
            <div className="schedule__title">{schedule.living2}</div>
            <div className="schedule__random">Brother:</div>
            <div className="schedule__bro-sis">{schedule.living2Bro}</div>
          </div>
        )}

        {schedule.event === "Circuit Overseer's Visit" && (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time9}</div>
            <div className="schedule__title">
              Concluding Comments (3 mins or less)
            </div>
            <div className="schedule__random">Chairman:</div>
            <div className="schedule__bro-sis">{schedule.chairman}</div>
          </div>
        )}
        {schedule.event === "Circuit Overseer's Visit" && (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time8}</div>
            <div className="schedule__title">Circuit Overseer's Talk</div>
            <div className="schedule__random">Brother:</div>
            <div className="schedule__bro-sis">Circuit Overseer</div>
          </div>
        )}
        {schedule.event === "Circuit Overseer's Visit" && (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time10}</div>
            <div className="schedule__title">Song</div>
            <div className="schedule__random">Prayer:</div>
            <div className="schedule__bro-sis">Circuit Overseer</div>
          </div>
        )}
        {schedule.event === "" && (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time8}</div>
            <div className="schedule__title">
              Congregation Bible Study (30 mins)
            </div>
            <div className="schedule__random">Conductor:</div>
            <div className="schedule__bro-sis">{schedule.conductor}</div>
          </div>
        )}

        {schedule.event === "" && (
          <div className="row schedule__row grid">
            <div className="schedule__time"></div>
            <div className="schedule__title"></div>
            <div className="schedule__random">Reader:</div>
            <div className="schedule__bro-sis">{schedule.reader}</div>
          </div>
        )}

        {schedule.event === "" && (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time9}</div>
            <div className="schedule__title">
              Concluding Comments (3 mins or less)
            </div>
            <div className="schedule__random">Chairman:</div>
            <div className="schedule__bro-sis">{schedule.chairman}</div>
          </div>
        )}
        {schedule.event === "" && (
          <div className="row schedule__row grid">
            <div className="schedule__time">{schedule.time10}</div>
            <div className="schedule__title">Song {schedule.song3}</div>
            <div className="schedule__random">Prayer:</div>
            <div className="schedule__bro-sis">{schedule.closingPrayer}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Thursday;
