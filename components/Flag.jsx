import React from "react";
import PropTypes from "prop-types";

export const Flag = ({ primary, title, link, authors, date }) => {
  return (
    <li>
      <a href={link} className='Flag'>
        <p>
          <span>{title}</span>
        </p>
        <span>{authors}</span>
        <br />
        <date>{date}</date>
      </a>
      <a href={link} className='Label'>
        {title}
      </a>
      <style jsx>{`
        li {
          position: relative;
          padding: 4px 1px;
          display: flex;
          flex-basis: 100%;
          flex: 1 1 auto;
          flex-basis: auto;
          min-height: 0px;
          padding-top: 4px;
        }
        .Label {
          min-height: 0px;
          overflow: hidden;
          width: 40px;
          display: block;
          line-height: 1.1;
          writing-mode: tb-rl;
          font-family: WorkSans;
          font-size: 10.4px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.31px;
          text-align: left;
          color: #040404;
        }
        li a.Flag {
          margin-left: 6px;
          display: none;
          position: absolute;
          width: 300px;
          min-height: 100%;
          height: auto;
          z-index: 20;
          left: -260px;
          bottom: 0;
          padding: 12px;
          background-blend-mode: multiply;
          background-size: cover;
          background: #545454;
          text-decoration: none;
          color: white;
        }
        li a.Flag p span {
          font-size: 17.66px;
        }
        li a.Flag span, li a.Flag date {
          font-style: normal;
          font-weight: 700;
          font-size: 11.302px;
          line-height: 150%;
        }
        li:hover .Flag {
          display: block;
        }
      `}</style>
    </li>
  );
};

Flag.PropTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
  link: PropTypes.string,
  authors: PropTypes.string,
  date: PropTypes.string,
};

Flag.defaultProps = {
  primary: false,
  title: "The Pigeon Flies",
  link: "/",
  authors: "Firstname Lastname",
  date: "00 Jan 2000",
};
