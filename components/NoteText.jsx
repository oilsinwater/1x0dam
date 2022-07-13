import React from "react";
import propTypes from "prop-types";

export const NoteText = ({ primary, title, author, date, content }) => {
  return (
    <div className="NoteText note-text">
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

NoteText.propTypes = {
    primary: propTypes.bool,
    title: propTypes.string,
    author: propTypes.string,
    date: propTypes.string,
    content: propTypes.string,
}

NoteText.defaultProps = {
    primary: false,
    title: null,
    author: null,
    date: null,
    content: 'Quis risus sed vulputate odio ut enim blandit volutpat. Lacus sed turpis tincidunt id aliquet risus feugiat.'
}
