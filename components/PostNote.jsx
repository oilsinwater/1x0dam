import React from "react";
import PropTypes from "prop-types";
import { NoteCover, NoteCoverLarge } from "./NoteCover";
import { NoteText } from "./NoteText";

export const PostNoteOnly = ({ primary }) => {
  return (
    <div className='PostNoteOnly'>
      <NoteText primary={true} />
      <style jsx>{`
        .PostNoteOnly {
          width: 280px;
          height: 253px;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 8px;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export const PostNote = ({ secondary }) => {
  return (
    <div className='PostNote'>
      <NoteCover />
      <NoteText
        primary={true}
        title='The Title'
        author='Firstname Lastname, Random House'
        date='00 Jan 2022'
        content={null}
      />
      <style jsx>{`
        .PostNote {
          width: 280px;
          height: 139px;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 16px;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export const PostNoteLarge = ({ tertiary }) => {
  return (
    <div className='PostNoteLarge'>
      <NoteCoverLarge />
      <NoteText
        primary={true}
        title='The Title'
        author='Firstname Lastname, Random House'
        date='00 Jan 2022'
        content={null}
      />
      <style jsx>
        {`
          .PostNoteLarge {
            width: 280px;
            height: 253px;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 8px;
            padding: 8px;
            border: solid 1px var(--black);
            background-color: #fff;
          }
        `}
      </style>
    </div>
  );
};

PostNoteOnly.PropTypes = {
  primary: PropTypes.bool,
};
PostNoteOnly.defaultProps = {
  primary: false,
};

PostNote.PropTypes = {
  secondary: PropTypes.bool,
};
PostNote.defaultProps = {
  secondary: false,
};

PostNoteLarge.PropTypes = {
  tertiary: PropTypes.bool,
};
PostNoteLarge.defaultProps = {
  tertiary: false,
};
