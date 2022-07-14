import React from "react";
import propTypes from "prop-types";
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

                @media (max-width: 414px) {
                  .PostRow {
                    gap: 64px;
                  }
                }
            `}
        </style>
      </div>
    </>
  );
};

PostRow.propTypes = {
  primary: propTypes.bool,
};

PostRow.defaultProps = {
  primary: false,
};
