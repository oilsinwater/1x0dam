import React from "react";
import { PostHeaderTitle } from "./PostHeaderTitle";
import { PostHeaderDetails } from "./PostHeaderDetails";

export const PostHeaderText = ({ primary }) => {
  return (
    <>
      <PostHeaderTitle />
      <PostHeaderDetails />
    </>
  );
};
