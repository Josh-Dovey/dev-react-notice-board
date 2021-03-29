import useSWR from "swr";

import { Link, withRouter } from "react-router-dom";
import { ChevronLeft } from "react-feather";

import Thursday from "./Thursday";
import Sunday from "./Sunday";

function Month(props) {
  const monthName = props.match.params.month;
  const { data, isLoading } = useSWR(`/api/${props.type}/month/${monthName}`);
  return (
    <div className="col--2">
      <div className="nav--placeholder">&nbsp;</div>

      {isLoading || !data ? (
        <main className="main">
          <h1>Results loading...</h1>
        </main>
      ) : (
        <main className="main">
          <Link to="/home" className="btn btn--back">
            <ChevronLeft className="btn--back__icon" />
            Back
          </Link>

          {data.length === 0 && <h1>There are no schedules for {monthName}</h1>}
          {props.type === "thursday"
            ? data.map((doc) => (
                <Thursday
                  key={doc.slug}
                  doc={doc}
                  user={props.user}
                  showOptions={false}
                />
              ))
            : data.map((doc) => (
                <Sunday
                  key={doc.slug}
                  doc={doc}
                  user={props.user}
                  showOptions={false}
                />
              ))}
        </main>
      )}
    </div>
  );
}

export default withRouter(Month);
