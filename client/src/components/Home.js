import QuickBox from "./QuickBox";

function Home() {
  const monthNumsArr = [0, 1, 2];
  return (
    <div>
      <div className="col--3">
        <div className="nav--placeholder">&nbsp;</div>

        <main className="main">
          <div className="message"></div>
          <h1>Home</h1>
          <p className="page__description">
            This is an online notice board for Kidderminster Kingdom Hall. Here
            you can find the schedules for upcoming meetings. Click on a box to
            see the schedules for that month.
          </p>
          <h2>Quick Search:</h2>
          <h3>Thursdays</h3>
          <div className="quick__grid">
            {monthNumsArr.map((value) => {
              return <QuickBox type="thursday" addMonth={value} />;
            })}
          </div>
          <h3>Sundays</h3>
          <div className="quick__grid">
            {monthNumsArr.map((value) => {
              return <QuickBox type="sunday" addMonth={value} />;
            })}
          </div>
        </main>

        <div className="nav--placeholder">&nbsp;</div>
      </div>
    </div>
  );
}

export default Home;
