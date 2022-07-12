import React from "react";
import PropTypes from "prop-types";
import { PostBlock } from "./PostBlock";
import { NoteText } from "./NoteText";

export const PostRow = ({ primary }) => {
  return (
    <>
      <div className="PostRow">
        <PostBlock />
        <NoteText />
        <style jsx>
            {`
            .PostRow {
                display: flex;
                flex-direction: row;
                gap: 119px;
                margin-top: 24px;
                }
            `}
        </style>
      </div>
    </>
  );
};

PostRow.PropTypes = {
  primary: PropTypes.bool,
};

PostRow.defaultProps = {
  primary: false,
};
