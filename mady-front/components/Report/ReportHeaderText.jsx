import React from "react";
import propTypes from 'prop-types';
import { ReportHeaderTitle } from "./ReportHeaderTitle";
import { ReportHeaderDetails } from "./ReportHeaderDetails";

export const ReportHeaderText = ({ primary }) => {
  return (
    <>
      <div className="ReportHeaderText">
        <ReportHeaderTitle />
        <ReportHeaderDetails />
        <style jsx>
          {`
          .ReportHeaderText {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 0px;
            margin: 0px;
          }
          `}
        </style>
      </div>
    </>
  );
};


ReportHeaderText.propTypes = {
  primary: propTypes.bool,
};

ReportHeaderText.defaultProps = {
  primary: false,
};