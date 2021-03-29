import { FolderPlus } from "react-feather";

import { Link } from "react-router-dom";

// import Error from "./Error";

function CreateChoice({ user }) {
  return (
    <div className="col--3">
      <div className="nav--placeholder">&nbsp;</div>

      <main className="main">
        <h1>Create</h1>
        <p>
          Choose a schedule to create. Don't worry if you only have a few
          details, as you can always edit it at another time.
        </p>

        <h2>Choose:</h2>
        <div className="create__grid">
          <Link to="/create/thursday" className="create__link">
            <FolderPlus className="create__icon" />
            Thursday
          </Link>

          <Link to="/create/sunday" className="create__link">
            <FolderPlus className="create__icon" />
            Sunday
          </Link>
        </div>
      </main>
    </div>
  );
}

export default CreateChoice;
