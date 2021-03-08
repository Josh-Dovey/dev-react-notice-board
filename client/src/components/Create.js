import { useRef, useState } from "react";

import { Redirect } from "react-router-dom";

import Poster from "../utils/Poster";

function Create({ type }) {
  // state
  const [success, setSuccess] = useState(null);
  const [redirect, setRedirect] = useState(false);

  // Thursday input elements
  const eventThursday = useRef(null);
  const monthThursday = useRef(null);
  const dayThursday = useRef(null);
  const yearThursday = useRef(null);
  const study = useRef(null);
  const chairmanThursday = useRef(null);
  const openPrayerThursday = useRef(null);
  const closingPrayerThursday = useRef(null);
  const song1Thursday = useRef(null);
  const song2Thursday = useRef(null);
  const song3Thursday = useRef(null);
  const treasures = useRef(null);
  const treasuresBro = useRef(null);
  const diggingBro = useRef(null);
  const bibleReading = useRef(null);
  const school1 = useRef(null);
  const school2 = useRef(null);
  const school3 = useRef(null);
  const school4 = useRef(null);
  const assistant1 = useRef(null);
  const assistant2 = useRef(null);
  const assistant3 = useRef(null);
  const assistant4 = useRef(null);
  const student1 = useRef(null);
  const student2 = useRef(null);
  const student3 = useRef(null);
  const student4 = useRef(null);
  const living1 = useRef(null);
  const living2 = useRef(null);
  const living1Bro = useRef(null);
  const living2Bro = useRef(null);
  const conductorThursday = useRef(null);
  const readerThursday = useRef(null);
  const time1Thursday = useRef(null);
  const time2Thursday = useRef(null);
  const time3Thursday = useRef(null);
  const time4Thursday = useRef(null);
  const time5Thursday = useRef(null);
  const time6Thursday = useRef(null);
  const time7Thursday = useRef(null);
  const time8Thursday = useRef(null);
  const time9Thursday = useRef(null);
  const time10Thursday = useRef(null);

  const createThursday = async (e) => {
    e.preventDefault();
    const data = {
      event: eventThursday.current.value,
      month: monthThursday.current.value,
      day: dayThursday.current.value,
      year: yearThursday.current.value,
      study: study.current.value,
      chairman: chairmanThursday.current.value,
      openPrayer: openPrayerThursday.current.value,
      song1: song1Thursday.current.value,
      song2: song2Thursday.current.value,
      song3: song3Thursday.current.value,
      treasures: treasures.current.value,
      treasuresBro: treasuresBro.current.value,
      diggingBro: diggingBro.current.value,
      bibleReading: bibleReading.current.value,
      school1: school1.current.value,
      school2: school2.current.value,
      school3: school3.current.value,
      school4: school4.current.value,
      student1: student1.current.value,
      student2: student2.current.value,
      student3: student3.current.value,
      student4: student4.current.value,
      assistant1: assistant1.current.value,
      assistant2: assistant2.current.value,
      assistant3: assistant3.current.value,
      assistant4: assistant4.current.value,
      living1: living1.current.value,
      living2: living2.current.value,
      living1Bro: living1Bro.current.value,
      living2Bro: living2Bro.current.value,
      time1: time1Thursday.current.value,
      time2: time2Thursday.current.value,
      time3: time3Thursday.current.value,
      time4: time4Thursday.current.value,
      time5: time5Thursday.current.value,
      time6: time6Thursday.current.value,
      time7: time7Thursday.current.value,
      time8: time8Thursday.current.value,
      time9: time9Thursday.current.value,
      time10: time10Thursday.current.value,
      conductor: conductorThursday.current.value,
      reader: readerThursday.current.value,
      closingPrayer: closingPrayerThursday.current.value,
    };

    const res = await Poster("/api/thursday", data);

    if (res.status === "success") {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(null);
        setRedirect(true);
      }, 1500);
    } else {
      setSuccess(false);
    }

    return res.status;
  };

  // Sunday input elements
  const eventSunday = useRef(null);
  const monthSunday = useRef(null);
  const daySunday = useRef(null);
  const yearSunday = useRef(null);
  const chairmanSunday = useRef(null);
  const song1Sunday = useRef(null);
  const song2Sunday = useRef(null);
  const song3Sunday = useRef(null);
  const openPrayerSunday = useRef(null);
  const publicTalk = useRef(null);
  const publicTalkBro = useRef(null);
  const conductorSunday = useRef(null);
  const readerSunday = useRef(null);
  const closingPrayerSunday = useRef(null);
  const time1Sunday = useRef(null);
  const time2Sunday = useRef(null);
  const time3Sunday = useRef(null);
  const time4Sunday = useRef(null);
  const time5Sunday = useRef(null);

  const createSunday = async (e) => {
    e.preventDefault();

    const data = {
      event: eventSunday.current.value,
      month: monthSunday.current.value,
      day: daySunday.current.value,
      year: yearSunday.current.value,
      chairman: chairmanSunday.current.value,
      song1: song1Sunday.current.value,
      song2: song2Sunday.current.value,
      song3: song3Sunday.current.value,
      openPrayer: openPrayerSunday.current.value,
      publicTalk: publicTalk.current.value,
      publicTalkBro: publicTalkBro.current.value,
      conductor: conductorSunday.current.value,
      reader: readerSunday.current.value,
      closingPrayer: closingPrayerSunday.current.value,
      time1: time1Sunday.current.value,
      time2: time2Sunday.current.value,
      time3: time3Sunday.current.value,
      time4: time4Sunday.current.value,
      time5: time5Sunday.current.value,
    };

    const res = await Poster("/api/sunday", data);

    if (res.status === "success") {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(null);
        setRedirect(true);
      }, 1500);
    } else {
      setSuccess(false);
    }

    return res.status;
  };

  return (
    <div className="col--2">
      {redirect ? <Redirect to={`/schedules/${type}`} /> : ""}
      <div className="nav--placeholder">&nbsp;</div>

      <main className="main">
        <div
          className={success ? "success message" : "error message"}
          style={{ display: success || success === false ? "block" : "none" }}
        >
          {success ? "Schedule created successfully" : "An error occured"}
        </div>
        <h1>Create {type}</h1>
        {type === "thursday" ? (
          <form id="thursdayForm" onSubmit={createThursday}>
            <div className="create">
              <label htmlFor="event" className="create__label">
                Event
              </label>
              <select
                ref={eventThursday}
                name="event"
                id="event"
                className="create__input--event"
              >
                <option value=""></option>
                <option value="Circuit Assembly - With Circuit Overseer">
                  Circuit Assembly - With Circuit Overseer
                </option>
                <option value="Circuit Assembly - With Branch Representative">
                  Circuit Assembly - With Branch Representative
                </option>
                <option value="Circuit Overseer's Visit">
                  Circuit Overseer's Visit
                </option>
              </select>

              <div className="schedule__general create__general">
                <div className="input__box--month">
                  <label htmlFor="month" className="create__label">
                    Month:
                  </label>
                  <select
                    ref={monthThursday}
                    name="month"
                    id="month"
                    className="create__input create__input--small"
                  >
                    <option value="January">Jan</option>
                    <option value="February">Feb</option>
                    <option value="March">Mar</option>
                    <option value="April">Apr</option>
                    <option value="May">May</option>
                    <option value="June">Jun</option>
                    <option value="July">Jul</option>
                    <option value="August">Aug</option>
                    <option value="September">Sep</option>
                    <option value="October">Oct</option>
                    <option value="November">Nov</option>
                    <option value="December">Dec</option>
                  </select>
                </div>
                <div className="input__box--day">
                  <label className="create__label" htmlFor="day">
                    Day:
                  </label>
                  <input
                    ref={dayThursday}
                    className="create__input create__input--small"
                    id="day"
                    type="number"
                    name="day"
                    min="1"
                    max="31"
                  />
                </div>
                <div className="input__box--year">
                  <label className="create__label" htmlFor="year">
                    Year:
                  </label>
                  <input
                    ref={yearThursday}
                    className="create__input create__input--small"
                    id="year"
                    type="number"
                    name="year"
                    min="2020"
                    max="2030"
                  />
                </div>
                <div className="input__box--study">
                  <label className="create__label" htmlFor="study">
                    Study:
                  </label>
                  <input
                    ref={study}
                    className="create__input"
                    id="study"
                    type="text"
                    name="study"
                  />
                </div>
                <div className="input__box--chairman">
                  <label className="create__label" htmlFor="chairman">
                    Chairman:
                  </label>
                  <input
                    ref={chairmanThursday}
                    className="create__input"
                    id="chairman"
                    type="text"
                    name="chairman"
                  />
                </div>
              </div>

              <div className="row__header grid">
                <h4>Time</h4>
                <h4>Title</h4>
                <h4>&nbsp;</h4>
                <h4>Brother / Sister</h4>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">7:00</div>
                <div className="schedule__title">
                  <label htmlFor="sgon1" className="create__label">
                    Song
                  </label>
                  <input
                    ref={song1Thursday}
                    type="text"
                    id="song1"
                    name="song1"
                    className="create__song"
                  />
                </div>
                <div className="schedule__random">Prayer:</div>
                <div className="schedule__bro-sis">
                  <input
                    ref={openPrayerThursday}
                    type="text"
                    name="openPrayer"
                    id="openPrayer"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">7:05</div>
                <div className="schedule__title">Opening Comments</div>
                <div className="schedule__random">Chairman</div>
                <div className="schedulr__bro-sis"></div>
              </div>

              <div className="section treasures">Treasures from God's Word</div>

              <div className="row schedule__row grid">
                <div className="schedule__time">7:06</div>
                <div className="schedule__title">
                  <input
                    ref={treasures}
                    type="text"
                    id="treasures"
                    className="create__input"
                  />
                </div>
                <div className="schedule__random">Brother:</div>
                <div className="schedulr__bro-sis">
                  <input
                    ref={treasuresBro}
                    type="text"
                    id="treasuresBro"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">7:16</div>
                <div className="schedule__title">
                  Digging For Spiritual Gems
                </div>
                <div className="schedule__random">Brother:</div>
                <div className="schedulr__bro-sis">
                  <input
                    ref={diggingBro}
                    type="text"
                    id="diggingBro"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">7:26</div>
                <div className="schedule__title">Bible Reading</div>
                <div className="schedule__random">Student:</div>
                <div className="schedulr__bro-sis">
                  <input
                    ref={bibleReading}
                    type="text"
                    id="bibleReading"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="section school">
                Apply Yourself to Reading and Teaching
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time1Thursday}
                    type="text"
                    id="time1"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <select ref={school1} className="create__input" id="school1">
                    <option value=""></option>
                    <option value="Apply Yourself to Reading and Teaching">
                      Apply Yourself to Reading and Teaching
                    </option>
                    <option value="Initial Call Video">
                      Initial Call Video
                    </option>
                    <option value="Initial Call">Initial Call</option>
                    <option value="Return Visit">Return Visit</option>
                    <option value="Return Visit Video">
                      Return Visit Video
                    </option>
                    <option value="Lockdown Ministry">Lockdown Ministry</option>
                  </select>
                </div>
                <div className="schedule__random">
                  <span>Student</span>
                  <span className="seperator"> / </span>
                  <span>Assistant</span>
                </div>
                <div className="schedule__bro-sis">
                  <input
                    ref={student1}
                    type="text"
                    id="student1"
                    className="create__input"
                  />
                  <span className="seperator"> / </span>
                  <input
                    ref={assistant1}
                    type="text"
                    id="assistant1"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time2Thursday}
                    type="text"
                    id="time2"
                    className="create__input"
                  />
                </div>

                <div className="schedule__title">
                  <select
                    ref={school2}
                    name="school2"
                    id="school2"
                    className="create__input"
                  >
                    <option value=""></option>
                    <option value="Initial Call">Initial Call</option>
                    <option value="Return Visit">Return Visit</option>
                    <option value="Student Talk">Student Talk</option>
                    <option value="Bible Study">Bible Study</option>
                  </select>
                </div>

                <div className="schedule__random">
                  <span>Student</span>
                  <span className="seperator"> / </span>
                  <span>Assistant</span>
                </div>

                <div className="schedule__bro-sis">
                  <input
                    ref={student2}
                    type="text"
                    id="student2"
                    className="create__input"
                  />
                  <span className="seperator"> / </span>
                  <input
                    ref={assistant2}
                    type="text"
                    id="assistant2"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time3Thursday}
                    type="text"
                    id="time3"
                    className="create__input"
                  />
                </div>

                <div className="schedule__title">
                  <select
                    ref={school3}
                    name="school3"
                    id="school3"
                    className="create__input"
                  >
                    <option value=""></option>
                    <option value="Initial Call">Initial Call</option>
                    <option value="Return Visit">Return Visit</option>
                    <option value="Student Talk">Student Talk</option>
                    <option value="Bible Study">Bible Study</option>
                  </select>
                </div>

                <div className="schedule__random">
                  <span>Student</span>
                  <span className="seperator"> / </span>
                  <span>Assistant</span>
                </div>

                <div className="schedule__bro-sis">
                  <input
                    ref={student3}
                    type="text"
                    id="student3"
                    className="create__input"
                  />
                  <span className="seperator"> / </span>
                  <input
                    ref={assistant3}
                    type="text"
                    id="assistant3"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time4Thursday}
                    type="text"
                    id="time4"
                    className="create__input"
                  />
                </div>

                <div className="schedule__title">
                  <select
                    ref={school4}
                    name="school4"
                    id="school4"
                    className="create__input"
                  >
                    <option value=""></option>
                    <option value="Initial Call">Initial Call</option>
                    <option value="Return Visit">Return Visit</option>
                    <option value="Student Talk">Student Talk</option>
                    <option value="Bible Study">Bible Study</option>
                  </select>
                </div>

                <div className="schedule__random">
                  <span>Student</span>
                  <span className="seperator"> / </span>
                  <span>Assistant</span>
                </div>

                <div className="schedule__bro-sis">
                  <input
                    ref={student4}
                    type="text"
                    id="student4"
                    className="create__input"
                  />
                  <span className="seperator"> / </span>
                  <input
                    ref={assistant4}
                    type="text"
                    id="assistant4"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="section living">Living as Christians</div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time5Thursday}
                    type="text"
                    id="time5"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <label htmlFor="song2" className="create__label">
                    Song
                  </label>
                  <input
                    ref={song2Thursday}
                    type="text"
                    id="song2"
                    className="create__song"
                  />
                </div>

                <div className="schedule__random"></div>
                <div className="schedulr__bro-sis"></div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time6Thursday}
                    type="text"
                    id="time6"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <input
                    ref={living1}
                    type="text"
                    id="living1"
                    className="create__input"
                  />
                </div>
                <div className="schedule__random">Brother:</div>
                <div className="schedule__bro-sis">
                  <input
                    ref={living1Bro}
                    type="text"
                    id="living1Bro"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time7Thursday}
                    type="text"
                    id="time7"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <input
                    ref={living2}
                    type="text"
                    id="living2"
                    className="create__input"
                  />
                </div>
                <div className="schedule__random">Brother:</div>
                <div className="schedule__bro-sis">
                  <input
                    ref={living2Bro}
                    type="text"
                    id="living2Bro"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time8Thursday}
                    type="text"
                    id="time8"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  Congregation Bible Study (30 mins)
                </div>
                <div className="schedule__random">
                  <span>Conductor</span>
                  <span className="seperator"> / </span>
                  <span>Reader</span>
                </div>
                <div className="schedule__bro-sis">
                  <input
                    ref={conductorThursday}
                    type="text"
                    id="conductor"
                    className="create__input"
                  />
                  <span className="seperator"> / </span>
                  <input
                    ref={readerThursday}
                    type="text"
                    id="reader"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time9Thursday}
                    type="text"
                    id="time9"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  Concluding Comments (3 mins or less)
                </div>
                <div className="schedule__random">Chairman:</div>
                <div className="schedule__bro-sis"></div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time10Thursday}
                    type="text"
                    id="time10"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <label htmlFor="song3" className="create__label">
                    Song
                  </label>
                  <input
                    ref={song3Thursday}
                    type="text"
                    name="song3"
                    id="song3"
                    className="create__song"
                  />
                </div>
                <div className="schedule__random">Prayer:</div>
                <div className="schedule__bro-sis">
                  <input
                    ref={closingPrayerThursday}
                    type="text"
                    id="closingPrayer"
                    className="create__input"
                  />
                </div>
              </div>
            </div>

            <div className="row--operation">
              <button className="btn btn--create" type="submit">
                Create
              </button>
            </div>
          </form>
        ) : (
          <form id="sundayForm" onSubmit={createSunday}>
            <div className="create">
              <label htmlFor="event" className="create__label">
                Event
              </label>
              <select
                ref={eventSunday}
                name="event"
                id="event"
                className="create__input--event"
              >
                <option value=""></option>
                <option value="Circuit Assembly - With Circuit Overseer">
                  Circuit Assembly - With Circuit Overseer
                </option>
                <option value="Circuit Assembly - With Branch Representative">
                  Circuit Assembly - With Branch Representative
                </option>
                <option value="Circuit Overseer's Visit">
                  Circuit Overseer's Visit
                </option>
              </select>

              <div className="schedule__general create__general">
                <div className="input__box--month">
                  <label htmlFor="month" className="create__label">
                    Month:
                  </label>
                  <select
                    ref={monthSunday}
                    name="month"
                    id="month"
                    className="create__input create__input--small"
                  >
                    <option value="January">Jan</option>
                    <option value="February">Feb</option>
                    <option value="March">Mar</option>
                    <option value="April">Apr</option>
                    <option value="May">May</option>
                    <option value="June">Jun</option>
                    <option value="July">Jul</option>
                    <option value="August">Aug</option>
                    <option value="September">Sep</option>
                    <option value="October">Oct</option>
                    <option value="November">Nov</option>
                    <option value="December">Dec</option>
                  </select>
                </div>
                <div className="input__box--day">
                  <label className="create__label" htmlFor="day">
                    Day:
                  </label>
                  <input
                    ref={daySunday}
                    className="create__input create__input--small"
                    id="day"
                    type="number"
                    name="day"
                    min="1"
                    max="31"
                  />
                </div>
                <div className="input__box--year">
                  <label className="create__label" htmlFor="year">
                    Year:
                  </label>
                  <input
                    ref={yearSunday}
                    className="create__input create__input--small"
                    id="year"
                    type="number"
                    name="year"
                    min="2020"
                    max="2030"
                  />
                </div>
                <div className="input__box--chairman">
                  <label className="create__label" htmlFor="chairman">
                    Chairman:
                  </label>
                  <input
                    ref={chairmanSunday}
                    className="create__input"
                    id="chairman"
                    type="text"
                    name="chairman"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time1Sunday}
                    type="text"
                    id="time1Sunday"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <label htmlFor="song1Sunday" className="create__label">
                    Song
                  </label>
                  <input
                    ref={song1Sunday}
                    type="text"
                    id="song1Sunday"
                    className="create__song"
                  />
                </div>
                <div className="schedule__random">Prayer:</div>
                <div className="schedule__bro-sis">
                  <input
                    ref={openPrayerSunday}
                    type="text"
                    id="openPrayerSunday"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time2Sunday}
                    type="text"
                    id="time2Sunday"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <label htmlFor="publicTalk" className="create__label">
                    Public Talk
                  </label>
                  <input
                    ref={publicTalk}
                    type="text"
                    id="publicTalk"
                    className="create__input create__input--public-talk"
                  />
                </div>
                <div className="schedule__random">Brother:</div>
                <div className="schedule__bro-sis">
                  <input
                    ref={publicTalkBro}
                    type="text"
                    id="publicTalkBro"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time3Sunday}
                    type="text"
                    id="time3Sunday"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <label htmlFor="song2Sunday" className="create__label">
                    Song
                  </label>
                  <input
                    ref={song2Sunday}
                    type="text"
                    id="song2Sunday"
                    className="create__song"
                  />
                </div>
                <div className="schedule__random"></div>
                <div className="schedule__bro-sis"></div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time4Sunday}
                    type="text"
                    id="time4Sunday"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  Bible Study through the Watchtower (60 mins)
                </div>
                <div className="schedule__random">
                  <span>Conductor / Reader</span>
                </div>
                <div className="schedule__bro-sis">
                  <input
                    ref={conductorSunday}
                    type="text"
                    id="conductorSunday"
                    className="create__input"
                  />
                  <span className="seperator">/</span>
                  <input
                    ref={readerSunday}
                    type="text"
                    id="readerSunday"
                    className="create--input"
                  />
                </div>
              </div>

              <div className="row schedule__row grid">
                <div className="schedule__time">
                  <input
                    ref={time5Sunday}
                    type="text"
                    id="time5Sunday"
                    className="create__input"
                  />
                </div>
                <div className="schedule__title">
                  <label htmlFor="song3Sunday" className="create__label">
                    Song
                  </label>
                  <input
                    ref={song3Sunday}
                    type="text"
                    id="song3Sunday"
                    className="create__song"
                  />
                </div>
                <div className="schedule__random">Prayer:</div>
                <div className="schedule__bro-sis">
                  <input
                    ref={closingPrayerSunday}
                    type="text"
                    id="closingPrayerSunday"
                    className="create__input"
                  />
                </div>
              </div>

              <div className="row--operation">
                <button className="btn btn--create" type="submit">
                  Create
                </button>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}

export default Create;
