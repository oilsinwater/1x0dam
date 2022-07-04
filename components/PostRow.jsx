import React from "react";
import PropTypes from "prop-types";
import { PostBlock } from "./PostBlock";
import { NoteText } from "./NoteText";

export const PostRow = ({ primary }) => {
  return (
    <>
      <div className="post_row">
        <PostBlock />
        <NoteText />
        <style jsx>
            {`
            .post_row {
                display: flex;
                flex-direction: row;
                gap: 119px;
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
