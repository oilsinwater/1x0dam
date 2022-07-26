import propTypes from "prop-types";
import Logo from "./Logo";

export const TimelineLogo = ({ primary }) => {
  return (
    <div className='TimelineLogo'>
      <br/>
        <Logo />
      <style jsx>{`
        .TimelineLogo {
          width: 443px;
          height: 127px;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: left;
          align-content: center;
          align-items: flex-start;
          gap: 4px;
        }
      `}</style>
    </div>
  );
};

TimelineLogo.propTypes = {
  primary: propTypes.bool,
};

TimelineLogo.defaultProps = {
  primary: false,
};
