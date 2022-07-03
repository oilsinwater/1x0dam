import React from "react";
import PropTypes from "prop-types";
import { PostBlock } from "./PostBlock";
import { NoteBlock } from "./NoteBlock";

export const PostRow = ({ primary }) => {
  return (
    <>
      <div className="post_row">
        <PostBlock />
        <NoteBlock />
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
