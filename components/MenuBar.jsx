import React from "react";
import PropTypes from "prop-types";
import { MenuButton } from "./MenuButton";
import { UtilityButtons } from "./UtilityButtons";

export const MenuBar = ({ primary }) => {
  return (
    <div className='MenuBar'>
      <MenuButton />
      <UtilityButtons />
      <style jsx>{`
        .MenuBar {
          width: 43px;
          height: 1024px;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

MenuBar.PropTypes = {
    primary: PropTypes.bool,
};

MenuBar.defaultProps = {
    primary: false,
};
