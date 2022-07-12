import React from "react";
import PropTypes from "prop-types";

export const PostHeaderTitle = ({ primary, title }) => {
  return (
    <div className="post_header__title">
      <h1>{title}</h1>
      <style jsx>{`
        .post_header__title {
          width: auto;
          max-width: calc(100vw/2);
        }
        .post_header__title h1 {
          padding: 0px;
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 64px;
        }
        @media (max-width: 768px) {
          .post_header__title h1 {
            font-size: 64px;
            max-width: 14ch;
          }
        @media (min-width: 414px) {
          .post_header__title h1 {
            font-size: 40px;
            max-width: 8ch;
          }
        }
      `}</style>
    </div>
  );
};

PostHeaderTitle.PropTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
};

PostHeaderTitle.defaultProps = {
  primary: false,
  title: "The Publication Title",
};
