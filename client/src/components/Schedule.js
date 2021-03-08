import { Link, withRouter } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import useSWR from "swr";

// utils
// import Fetcher from "../utils/Fetcher";

import Thursday from "./Thursday";
import Sunday from "./Sunday";

function Schedule(props) {
  const { slug } = props.match.params;
  const { data, isLoading } = useSWR(`/api/${props.type}/${slug}`);

  return (
    <div className="col--2">
      <div className="nav--placeholder">&nbsp;</div>

      {isLoading || !data ? (
        <h1>Results loading...</h1>
      ) : (
        <main className="main">
          <Link to={`/schedules/${props.type}`} className="btn btn--back">
            <ChevronLeft className="btn--back__icon" />
            Back
          </Link>
          {props.type === "thursday" ? (
            <Thursday doc={data} user={props.user} showOptions={true} />
          ) : (
            <Sunday doc={data} user={props.user} showOptions={true} />
          )}
        </main>
      )}
    </div>
  );
}

export default withRouter(Schedule);
