// third party code
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import useSWR from "swr";

// utils
// import Fetcher from "../utils/Fetcher";

function Card({ doc, type }) {
  return (
    <div className="results__box">
      <div className="results--date">
        {doc.month} {doc.day} {doc.year}
      </div>
      {doc.study ? (
        <div className="results__info">{doc.study}</div>
      ) : (
        <div className="results__info">&nbsp;</div>
      )}
      <Link to={`/schedules/${type}/${doc.slug}`} className="btn btn--view">
        View
      </Link>
    </div>
  );
}

function Results({ type }) {
  const { data, isLoading } = useSWR(`/api/${type}`);

  return (
    <div className="col--3">
      <div className="nav--placeholder">&nbsp;</div>
      {isLoading || !data ? (
        <main className="main">
          <h1>Results loading...</h1>
        </main>
      ) : (
        <main className="main">
          <Link to="/schedules" className="btn btn--back">
            <ChevronLeft className="btn--back__icon" />
            Back
          </Link>
          <h1>{type}</h1>
          <p className="margin-bottom-med">
            Take a look at one of the latest schedules by clicking view.
          </p>
          <div className="results">
            {data.map((doc) => (
              <Card key={doc.slug} doc={doc} type={type} />
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default Results;
