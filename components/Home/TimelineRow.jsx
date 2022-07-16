import React from "react";
import PropTypes from "prop-types";

export const TimelineRow = ({ category, date, title }) => {
  return (
    <div className='TimelineRow'>
      <div className='RowWrap'>
        <div className='col'>
          <span className='Category'>{category}</span>
          <span className='Title'>{title}</span>
        </div>
        <span className='Date'>{date}</span>
      </div>
      <></>
      <style jsx>{`
        span.Date {
          width: 74px;
          max-width: 12ch;
          height: 17px;
          flex-grow: 0;
          font-family: WorkSans;
          font-size: 11.3px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 17px;
          letter-spacing: normal;
          text-align: right;
          color: #4f4d4d;
        }
        span.Category {
          width: auto;
          max-width: 28ch;
          height: 17px;
          flex-grow: 0;
          font-family: WorkSans;
          font-size: 11.3px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 17px;
          letter-spacing: normal;
          text-align: center;
          color: #4f4d4d;
        }
        span.Title {
          width: 114px;
          height: auto;
          flex-grow: 0;
          font-family: WorkSans;
          font-size: 11.3px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 17px;
          letter-spacing: normal;
          text-align: center;
          color: #4f4d4d;
        }
        div.col {
          width: 338px;
          height: 43px;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          padding: 0;
        }
        div.TimelineRow {
          width: 443px;
          height: auto;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 16px 0px;
          border-top: solid 1px;
          border-bottom: solid 1px;
        }
        div.RowWrap {
          width: 420px;
          height: auto;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-end;
          gap: 8px;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

TimelineRow.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

TimelineRow.defaultProps = {
  category: "[ Category ]",
  title: "The Publication Title",
  date: "00 Jan 2022",
};
