import PropTypes from "prop-types";
import Link from 'next/link';

export const TimelineRow = ({ category, date, title, slug }) => {
  return (
    <div className='TimelineRow'>
      <div className='RowWrap'>
        <div className='col'>
          <span className='Category'>{category}</span>
          <span className='Title'><Link target="_blank" href={`/reports/${slug}`}>{title}</Link></span>
        </div>
        <span className='Date'>{date}</span>
      </div>
      <style jsx>{`
        span.Date {
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
          padding: 0px;
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
          padding-left: 24px;
        }
        div.TimelineRow {
          cursor: pointer;
          min-width: 31vw;
          height: auto;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: left;
          align-items: center;
          gap: 8px;
          padding: 16px 0px;
          border-top: solid 1px;
        }
        div.RowWrap {
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
