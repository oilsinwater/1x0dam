import React from "react";
import PropTypes from "prop-types";

export const NoteBlock = ({ primary, secondary, large, special, text }) => {
  return (
    <div className="note_block">
      <p>{text}</p>
      <style jsx>
        {`
        .note_block {
            max-width: 264px;
            width: 264px;
        }
        `}
      </style>
    </div>
  );
};

NoteBlock.Proptypes = {
  primary: PropTypes.bool,
  text: PropTypes.string,
};

NoteBlock.defaultProps = {
  primary: false,
  text: "Quis risus sed vulputate odio ut enim blandit volutpat. Lacus sed turpis tincidunt aliquet risus feugiat. Tincidunt id aliquet risus feugiat in.",
};
