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

        <h1 className="notice_header">New Publications Available</h1>
        <h2 className="notice_month">June 2021</h2>
        <div className="notice">
          <p className="notice__content margin-bottom-med">
            We are pleased to inform you that the publications listed below may
            now be requested through the congregation via jw.org.
          </p>
        </div>
        <h3>Literature:</h3>
        <table className="notice__table margin-bottom-med">
          <tr>
            <th>Language</th>
            <th>Item Code</th>
            <th>Lang. Code</th>
            <th>Item Number</th>
            <th>Publication Short Title</th>
          </tr>
          <tr>
            <td>Albanian</td>
            <td>nwtls</td>
            <td>AL</td>
            <td>5141</td>
            <td>New World Translation (large-size)</td>
          </tr>
          <tr>
            <td>Cambodian</td>
            <td>nwt</td>
            <td>CB</td>
            <td>5140</td>
            <td>New World Translation</td>
          </tr>
          <tr>
            <td>Chinese Cantonese (Simplified)</td>
            <td>pc</td>
            <td>CNS</td>
            <td>6639</td>
            <td>Lasting Peace</td>
          </tr>
          <tr>
            <td>Latvian</td>
            <td>nwtls</td>
            <td>LT</td>
            <td>5141</td>
            <td>New World Translation (large-size)</td>
          </tr>
          <tr>
            <td>Nepali</td>
            <td>lfb</td>
            <td>NP</td>
            <td>5427</td>
            <td>Learn From the Bible</td>
          </tr>
          <tr>
            <td>Tahitian</td>
            <td>nwt</td>
            <td>TH</td>
            <td>5140</td>
            <td>New World Translation</td>
          </tr>
          <tr>
            <td>Valencian</td>
            <td>sjj</td>
            <td>VLC</td>
            <td>5341</td>
            <td>"Sing Out Joyfully"</td>
          </tr>
        </table>

        <h3>Periodicals:</h3>
        <table className="notice__table">
          <tr>
            <th>Language</th>
            <th>Periodical Type</th>
            <th>Lang. Code</th>
            <th>Production Information</th>
            <th>Effective Issues</th>
          </tr>
          <tr>
            <td>Irish</td>
            <td>The Watchtower (public edition)</td>
            <td>GC</td>
            <td>One-off</td>
            <td>2021 issue No. 2</td>
          </tr>
          <tr>
            <td>Scottish Gaelic</td>
            <td>The Watchtower (public edition)</td>
            <td>GCS</td>
            <td>One-off</td>
            <td>2021 issue No. 2</td>
          </tr>
          <tr>
            <td>Urdu</td>
            <td>The Watchtower (public edition)</td>
            <td>UD</td>
            <td>One-off</td>
            <td>2021 issue No. 2</td>
          </tr>
        </table>

        <p style={{ color: "red" }} className="margin-bottom-med">
          <b>
            Please submit requests for the magazines above no later than June
            27, 2021.
          </b>
        </p>

        <h3>Annual Items:</h3>

        <table className="notice__table">
          <tr>
            <th>Item Code</th>
            <th>Item Number</th>
            <th>Publication Short Title</th>
          </tr>
          <tr>
            <td>es22</td>
            <td>6922</td>
            <td>Examining the Scriptures Daily - 2022</td>
          </tr>
          <tr>
            <td>eslp22</td>
            <td>7022</td>
            <td>Examining the Scriptures Daily - 2022 - Large Print</td>
          </tr>
          <tr>
            <td>vol21</td>
            <td>5621</td>
            <td>Bound Volume 2021</td>
          </tr>
          <tr>
            <td>dx21</td>
            <td>6821</td>
            <td>Watch Tower Publications Index 2021</td>
          </tr>
        </table>
        <p>
          * All available languages for annual items have been released and can
          now be requested
        </p>

        <p className="margin-bottom-med">
          <b style={{ color: "red" }}>
            Please submit requests for annual items no later than August 2,
            2021.
          </b>{" "}
          Requests submitted should reflect the actual needs of publishers in
          the congregation. This will help determine correct printing
          quantities. For more information, please refer to the Announcements
          and Reminders (S-147) for June 2021.
        </p>

        <h3>Braille:</h3>
        <p>
          Braille literature items and magazine periodicals are available in a
          variety of languages. To see what is available, please log in to
          jw.org and go to CONGREGATION > REQUEST LITERATURE > BROWSE CATALOG.
          Transcripts of the regional convention talks and feature-length films
          in braille can be found under CONGREGATION > REQUEST LITERATURE >
          BROWSE CATALOG > FORMS AND SUPPLIES > BRAILLE. However, please note
          again that these are intended for those who are both deaf and blind.
        </p>

        <h1 className="notice__header">Sunday Field Service</h1>
        <table className="notice__table margin-bottom-med">
          <tr>
            <th>Date</th>
            <th>Brother</th>
          </tr>
          <tr>
            <td>June 13th</td>
            <td>Rob MacDonald</td>
          </tr>
          <tr>
            <td>June 20th</td>
            <td>Jim Monaghan</td>
          </tr>
          <tr>
            <td>June 27th</td>
            <td>Ron Pearson</td>
          </tr>
          <tr>
            <td>July 4th</td>
            <td>Darren Randall</td>
          </tr>
          <tr>
            <td>July 11th</td>
            <td>Dean Randall</td>
          </tr>
          <tr>
            <td>July 18th</td>
            <td>John Randall</td>
          </tr>
        </table>

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
