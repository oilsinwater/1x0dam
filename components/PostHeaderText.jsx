import React from "react";
import PropTypes from 'prop-types';
import { PostHeaderTitle } from "./PostHeaderTitle";
import { PostHeaderDetails } from "./PostHeaderDetails";

export const PostHeaderText = ({ primary }) => {
  return (
    <>
      <div className="post_header__text">
        <PostHeaderTitle />
        <PostHeaderDetails />
        <style jsx>
          {`
          .post_header__text {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 0px;
            margin: 0px;
          }
          `}
        </style>
      </div>
    </>
  );
};


PostHeaderText.PropTypes = {
  primary: PropTypes.bool,
};

PostHeaderText.defaultProps = {
  primary: false,
};