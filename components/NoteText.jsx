import React from "react";
import PropTypes from "prop-types";

export const NoteText = ({ primary, title, author, date, content }) => {
  return (
    <div className="NoteText">
        {title}<br/>
        {author}<br/>
        {date}<br/>
        {content}<br/>
      <style jsx>
        {`
          .NoteText {
            max-width: 264px;
            width: 100%;
            height: auto;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 4px;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

NoteText.PropTypes = {
    primary: PropTypes.bool,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
}

NoteText.defaultProps = {
    primary: false,
    title: undefined,
    author: undefined,
    date: undefined,
    content: 'Quis risus sed vulputate odio ut enim blandit volutpat. Lacus sed turpis tincidunt id aliquet risus feugiat. Tincidunt id aliquet risus feugiat in.'
}
