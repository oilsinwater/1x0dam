import React from "react";
import PropTypes from "prop-types";

export const PostHeaderTitle = ({ primary, title }) => {
  return <h1>{title}</h1>;
};

PostHeaderTitle.PropTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
};

PostHeaderTitle.defaultProps = {
  primary: false,
  title: "The Publication Title",
};
