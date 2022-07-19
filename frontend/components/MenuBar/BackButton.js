import propTypes from "prop-types";
import BackIcon from './BackIcon';

export const BackButton = ({ primary }) => {
  return (
    <button className='BackButton'>
      <span>
        <BackIcon />
      </span>
      <span className="BackButtonText">&nbsp;Back </span>
      <style jsx>{`
        .BackButton {
          height: 43px;
          width: 43px;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          position: fixed;
          bottom: 0;
          right: 0;
          border-top: 1px solid;
        }
        span.BackButtonText {
          display: none;
          font-size: 11px;
          color: #fff;
        }
        span.BackButtonText:hover {
          display: inline;
        }
      `}</style>
    </button>
  );
};

BackButton.propTypes = {
  primary: propTypes.bool,
};

BackButton.defaultProps = {
  primary: false,
};
