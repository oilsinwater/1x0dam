import React from "react";
import PropTypes from "prop-types";
import { MenuButton } from "./MenuButton";
import { UtilityButtons } from "./UtilityButtons";
import { MenuBarLinks } from "./MenuBarLinks";
import { BackButton } from "./BackButton";

export const MenuBar = ({ primary }) => {
  return (
    <div className='MenuBar'>
      <section>
        <MenuButton />
      </section>
      <section>
        <UtilityButtons />
      </section>
      <style jsx>{`
        .MenuBar {
          width: 44px;
          max-width: 44px;
          height: 100vh;
          display: flex;
          gap: 0px;
          flex-direction: column;
          justify-content: flex-start;
          padding: 0;
          background: #fff;
        }
      `}</style>
    </div>
  );
};

export const MenuBarFull = ({ secondary }) => {
  return (
    <div className='MenuBarFull'>
      <section>
        <MenuButton />
      </section>
      <section>
        <UtilityButtons />
      </section>
      <section>
        <MenuBarLinks />
      </section>
      <section>
        <BackButton />
      </section>
      <style jsx>{`
        .MenuBarFull {
          width: 44px;
          max-width: 44px;
          height: 100vh;
          flex-grow: 0;
          display: flex;
          gap: 0px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 0;
          background-color: #fff;
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

MenuBarFull.PropTypes = {
  secondary: PropTypes.bool,
};

MenuBarFull.defaultProps = {
  secondary: false,
};
