import React from "react";
import propTypes from "prop-types";

export const ReportHeaderTitle = ({ primary, title }) => {
  return (
    <div className="ReportHeaderTitle">
      <h1>{title}</h1>
      <style jsx>{`
        .ReportHeaderTitle {
          width: auto;
          max-width: calc(100vw/2);
        }
        .ReportHeaderTitle h1 {
          padding: 0px;
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 64px;
        }
        @media (max-width: 768px) {
          .ReportHeaderTitle h1 {
            font-size: 64px;
            max-width: 14ch;
          }
        @media (min-width: 414px) {
          .ReportHeaderTitle h1 {
            font-size: 40px;
            max-width: 8ch;
          }
        }
      `}</style>
    </div>
  );
};

ReportHeaderTitle.propTypes = {
  primary: propTypes.bool,
  title: propTypes.string,
};

ReportHeaderTitle.defaultProps = {
  primary: false,
  title: "The Publication Title",
};
