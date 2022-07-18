import React from "react";
import PropTypes from "prop-types";

export const TimelineButton = ({ category }) => {
  return (
    <button className='TimelineButton'>
      <span className='mirco'>{category}</span>
      <style jsx>{`
        .TimelineButton {
          border: 1px solid;
          width: auto;
          height: 2.75vh;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 4px 8px;
        }
        span.mirco {
          font-size: 10.4px;
          {/* text-decoration: uppercase; */}
        }
      `}</style>
    </button>
  );
};

TimelineButton.propTypes = {
  category: PropTypes.string,
};

TimelineButton.defaultProps = {
  category: "CATEGORY",
};
