import propTypes from "prop-types";
import { MenuButton } from "./MenuButton";
import { UtilityButtons } from "./UtilityButtons";
import { MenuBarLinks } from "./MenuBarLinks";
import { BackButton } from "./BackButton";

export const MenuBar = ({ primary }) => {
  return (
    <div className='MenuBar'>
      <MenuButton />
      <UtilityButtons />
      <style jsx>{`
        .MenuBar {
          width: 44px;
          max-width: 44px;
          height: 100%;
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
      <MenuButton />
      <UtilityButtons />
      <MenuBarLinks />
      <BackButton />
      <style jsx>{`
        .MenuBarFull {
          width: 44px;
          max-width: 44px;
          height: 100%;
          display: flex;
          gap: 0px;
          flex-direction: column;
          justify-content: flex-start;
          align-content: center;
          padding: 0;
          background: #f0f2f5;
        }
      `}</style>
    </div>
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
