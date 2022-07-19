import propTypes from "prop-types";
import Logo from "./Logo";

export const TimelineLogo = ({ primary }) => {
  return (
    <div className='TimelineLogo'>
        <Logo />
      <style jsx>{`
        .TimelineLogo {
          width: 443px;
          height: 127px;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 4px;
          padding: 48px 157px 24px 24px;
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
