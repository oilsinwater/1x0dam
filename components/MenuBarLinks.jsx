import React from "react";
import PropTypes from "prop-types";
import { Link } from './Link';

export const MenuBarLinks = ({ primary }) => {
  return (
    <div className='MenuBarLinks'>
      <Link />
      <Link />
      <Link />

      <style jsx>{`
        .MenuBarLinks {
          width: 44px;
          height: 100%;
          flex-grow: 0;
          display: flex;  
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: #fff;
          padding: 8px 0px;
          border-top: 1px solid;
          border-bottom: 1px solid;
        }    
      `}</style>
    </div>
  );
};

MenuBarLinks.PropTypes = {
  primary: PropTypes.bool,
};

MenuBarLinks.defaultProps = {
  primary: false,
};
