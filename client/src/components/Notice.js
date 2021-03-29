function Notice() {
  return (
    <div className="col--2">
      <div className="nav--placeholder">&nbsp;</div>

      <main className="main">
        <div className="message"></div>
        {/* How to make a table */}
        {/* <table className="notice__table margin-bottom-med">
            <tr>
              <th>Day</th>
              <th>Meeting</th>
              <th>Time</th>
              <th>Connect to Meeting Via Zoom</th>
            </tr>
            <tr>
              <td>
                <b>Tuesday</b>
              </td>
              <td>Midweek Meeting</td>
              <td>7:00 pm</td>
              <td>Usual Congregation Meeting Codes</td>
            </tr>
          </table> */}

        <h1 className="notice__header">Covid-19 Vaccine Announcement</h1>
        <h2 className="notice__month">December 31, 2020 For Congregations</h2>
        <div className="notice">
          <p className="notice__content margin-bottom-med">
            1. We have confirmed that the COVID-19 vaccine manufactured by
            AstraZeneca (ChAdOx1-S [recombinant]; also known as the
            Oxford-AstraZeneca COVID-19 Vaccine) does not contain blood or blood
            fractions. Medical care is a matter for personal decision. We do not
            attempt to make choices for others
          </p>
        </div>
        <h1 className="notice__header">Covid-19 Vaccine Announcement</h1>
        <h2 className="notice__month">December 3, 2020 For Congregations</h2>
        <div className="notice">
          <p className="notice__content margin-bottom-med">
            1. <b>COVID-19 Vaccine Information: </b>Several COVID-19 vaccines
            may soon be approved and become available. Some have asked if these
            vaccines contain blood or blood fractions. We have confirmed that
            the COVID-19 vaccine manufactured by Pfizer and BioNTech (COVID-19
            mRNA Vaccine BNT162b2) does not contain blood or blood fractions. As
            details become available regarding other vaccines, additional
            information will be provided. Medical care is a matter for personal
            decision. We do not attempt to make choices for others.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Notice;
