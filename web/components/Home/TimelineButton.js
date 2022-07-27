import PropTypes from "prop-types";

export const TimelineButton = ({ category }) => {
  return (
    <button className='TimelineButton' aria-label={category}><label of="button">{category}</label>
      <style jsx>{`
        .TimelineButton {
          border: 1px solid;
          width: auto;
          height: 4vh;
          flex-grow: 0;
          display: block;
          padding: 4px 8px;
        }
        label.mirco {
          font-size: 10.4px;
          {/* text-decoration: uppercase; */}
        }
      `}</style>
    </button>
  );
};

TimelineButton.propTypes = {
  category: PropTypes.string,
};

TimelineButton.defaultProps = {
  category: "CATEGORY",
};
