import React from "react";
import propTypes from "prop-types";

export const PostHeaderTitle = ({ primary, title }) => {
  return (
    <h1 className="post_header__title">
      {title}
      <style jsx>{`
        @media (max-width: 414px) {
          .post_header__title {
            font-size: 2.281rem;
          }
        }
      `}</style>
    </h1>
  );
};

PostHeaderTitle.propTypes = {
  primary: propTypes.bool,
  title: propTypes.string,
};

PostHeaderTitle.defaultProps = {
  primary: false,
  title: "The Publication Title",
};
