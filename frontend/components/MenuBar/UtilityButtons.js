import propTypes from "prop-types";
import HeartIcon from './HeartIcon';
import SubscribeIcon from './SubscribeIcon';
import ContactIcon from './ContactIcon';

export const UtilityButtons = ({ primary }) => {
  return (
    <div className='UtilityButtons'>
      <button>
        <SubscribeIcon />
      </button>
      <button>
        <ContactIcon/>
      </button>
      <button>
        <HeartIcon/>
      </button>
      <style jsx>{`
        .UtilityButtons {
          width: 44px;
          max-width: 43px;
          max-height: 129px;
          height: 129px;
          flex-grow: ;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
          border-top: 1px solid;
          padding: 0px;
          margin: 0px;
          display: flex;
        }
        button {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
        }
        svg:hover {
          fill: #fff;
        }
      `}</style>
    </div>
  );
};

UtilityButtons.propTypes = {
  propTypes: propTypes.bool,
};

UtilityButtons.defaultProps = {
  primary: false,
};
