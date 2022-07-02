import React from "react";
import { PostHeaderTitle } from "./PostHeaderTitle";
import { PostHeaderDetails } from "./PostHeaderDetails";

export const PostHeader = ({ primary }) => {
  return (
    <>
      <PostHeaderTitle />
      <PostHeaderDetails />
    </>
  );
};
