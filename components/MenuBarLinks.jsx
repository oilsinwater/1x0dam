import React from "react";
import PropTypes from "prop-types";
import { Flag } from './Flag';

export const MenuBarLinks = ({ primary }) => {
  return (
    <section className='MenuBarLinks'>
      <ul>
        <Flag />
      </ul>
      <style jsx>{`
        .MenuBarLinks {
          width: 44px;
          flex-grow: 0;
          display: flex;  
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: #f0f2f5;
          padding: 8px 0px;
          border-top: 1px solid;
          display: flex;
          height: calc(100vh - (5 * 44px) - 128px);
        }
        .MenuBarLinks ul {
          list-style: none;
        }    
      `}</style>
    </section>
  );
};

MenuBarLinks.PropTypes = {
  primary: PropTypes.bool,
};

MenuBarLinks.defaultProps = {
  primary: false,
};
