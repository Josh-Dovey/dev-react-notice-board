import { Folder } from "react-feather";

import { Link } from "react-router-dom";

function Schedules() {
  return (
    <div className="col--3">
      <div className="nav--placeholder">&nbsp;</div>

      <main className="main">
        <h1>Schedules</h1>
        <p className="page__description">
          Take a look at either Thursday or Sunday schedules, by clicking on
          your choice.
        </p>

        <h2>Choose:</h2>
        <div className="create__grid">
          <Link to="/schedules/thursday" className="create__link">
            <Folder className="create__icon" />
            Thursday
          </Link>

          <Link to="/schedules/sunday" className="create__link">
            <Folder className="create__icon" />
            Sunday
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Schedules;
