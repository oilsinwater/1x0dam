import propTypes from "prop-types";
import { MenuButton } from "./MenuButton";
import { UtilityButtons } from "./UtilityButtons";
import { MenuBarLinks } from "./MenuBarLinks";
import { BackButton } from "./BackButton";

export const MenuBar = ({ primary }) => {
  return (
    <nav className='MenuBar'>
      <MenuButton />
      <UtilityButtons />
      <style jsx>{`
        .MenuBar {
          cursor: pointer;
          width: 44px;
          max-width: 44px;
          height: 100vh;
          display: flex;
          gap: 0px;
          flex-direction: column;
          justify-content: flex-start;
          background: #f0f2f5;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 100;
          border-left: 1px solid black;
        }
      `}</style>
    </nav>
  );
};

// for report pages
export const MenuBarFull = ({ secondary }) => {
  return (
    <nav className='MenuBarFull'>
      <MenuButton />
      <UtilityButtons />
      <MenuBarLinks />
      <BackButton />
      <style jsx>{`
        .MenuBarFull {
          cursor: pointer;
          width: 44px;
          max-width: 44px;
          height: 100%;
          display: flex;
          gap: 0px;
          flex-direction: column;
          justify-content: flex-start;
          background-color: #f0f2f5;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 100;
          border-left: 1px solid black;
        }
      `}</style>
    </nav>
  );
};

MenuBar.propTypes = {
  primary: propTypes.bool,
};

MenuBar.defaultProps = {
  primary: false,
};

MenuBarFull.propTypes = {
  secondary: propTypes.bool,
};

MenuBarFull.defaultProps = {
  secondary: false,
};
