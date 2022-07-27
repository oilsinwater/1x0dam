import propTypes from "prop-types";

export const ReportHeaderDetails = ({ primary, authors, date }) => {
  return (
    <div className="ReportHeaderDetails">
      <span className="HeaderLabelAuthors">
        <caption>author(s)</caption>
      </span>
      <span className="HeaderTextAuthors">
        <a>{authors}</a>
      </span>
      <span className="HeaderLabelDate">
        <caption>date</caption>
      </span>
      <span className="HeaderTextDate">{date}</span>
      <style jsx>
        {`
          .ReportHeaderDetails {
            position: relative;
            padding: 0px;
            margin: 0px;
            width: auto;
            display: grid;
            grid:
              "label_authors label_date" auto
              "header_authors header_date" 32px
              / auto auto;
            gap: 0 auto;
            justify-content: start;
            align-content: start;
            grid-auto-flow: column;
            font-family: WorkSans;
            font-size: 17.66px;
          }
          .ReportHeaderDetails caption {
            text-transform: uppercase;
          }
          .ReportHeaderDetails span {
            text-transform: capitalize;
          }
          .HeaderLabelAuthors {
            grid-area: label_authors;
          }
          .HeaderLabelAuthors {
            grid-area: header_authors;
            width: 24ch;
          }
          .HeaderLabelDate {
            grid-area: label_date;
          }
          .HeaderLabelDate {
            grid-area: header_date;
          }
          @media (max-width: 414px) {
            .ReportHeaderDetails h1 {
              font-size: 32px;
            }
            .ReportHeaderDetails {
              display: grid;
              width: auto;
              grid:
                "label_authors" auto
                "header_authors" auto
                "label_date" auto
                "header_date" auto
                / auto;
              gap: 16px 0px;
              grid-auto-flow: column;
            }
          }
          @media (min-width: 320px) {
            .ReportHeaderDetails span {
              font-size: 14.1px;
            }
          }
        `}
      </style>
    </div>
  );
};

ReportHeaderDetails.propTypes = {
  primary: propTypes.bool,
  authors: propTypes.string,
  date: propTypes.string,
};

ReportHeaderDetails.defaultProps = {
  primary: false,
  authors: "Firstname Lastname",
  date: "00 Jan 2022",
};
