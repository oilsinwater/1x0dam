import React from "react";
import PropTypes from "prop-types";

export const MenuBarLinks = ({ primary, title }) => {
  return (
    <div className='MenuBarLinks'>
      <a className='Links'>{title}</a>
      <a className='Links'>{title}</a>
      <a className='Links'>{title}</a>
      <a className='Links'>{title}</a>
      <a className='Links'>{title}</a>
      <a className='Links'>{title}</a>
      <a className='Links'>{title}</a>
      <a className='Links'>{title}</a>
      <style jsx>{`
        .MenuBarLinks {
          width: 42px;
          height: 725px;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          border: solid 1px;
          background-color: #fff;
          padding: 8px 0px;
        }
        .Links {
          margin: 16px 16px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 68px;
          height: 40px;
          flex: auto;
          flex-grow: 0;
          transform: rotate(-270deg);
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
        
      `}</style>
    </div>
  );
};

MenuBarLinks.PropTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
};

MenuBarLinks.defaultProps = {
  primary: false,
  title: "The ultimate pigeon.",
};
