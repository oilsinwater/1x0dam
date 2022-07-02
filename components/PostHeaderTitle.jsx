import React from "react";
import propTypes from "prop-types";

export const PostHeaderTitle = ({ primary, title }) => {
  return <h1>{title}</h1>;
};

PostHeaderTitle.propTypes = {
  primary: propTypes.bool,
  title: propTypes.string,
};

PostHeaderTitle.defaultProps = {
  primary: false,
  title: "The Publication Title",
};
