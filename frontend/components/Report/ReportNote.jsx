import React from "react";
import propTypes from "prop-types";
import { NoteCover, NoteCoverLarge } from "./NoteCover";
import { NoteText } from "./NoteText";

export const ReportNoteOnly = ({ primary }) => {
  return (
    <div className='ReportNoteOnly'>
      <NoteText primary={true} />
      <style jsx>{`
        .ReportNoteOnly {
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

export const ReportNote = ({ secondary }) => {
  return (
    <div className='ReportNote'>
      <NoteCover />
      <NoteText
        primary={true}
        title='The Title'
        author='Firstname Lastname, Random House'
        date='00 Jan 2022'
        content={null}
      />
      <style jsx>{`
        .ReportNote {
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

export const ReportNoteLarge = ({ tertiary }) => {
  return (
    <div className='ReportNoteLarge'>
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
          .ReportNoteLarge {
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

ReportNoteOnly.propTypes = {
  primary: propTypes.bool,
};
ReportNoteOnly.defaultProps = {
  primary: false,
};

ReportNote.propTypes = {
  secondary: propTypes.bool,
};
ReportNote.defaultProps = {
  secondary: false,
};

ReportNoteLarge.propTypes = {
  tertiary: propTypes.bool,
};
ReportNoteLarge.defaultProps = {
  tertiary: false,
};
