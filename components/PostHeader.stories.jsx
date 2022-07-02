import React from "react";
import { PostHeader } from "./PostHeader";
import { PostHeaderTitle } from "./PostHeaderTitle";
import { PostHeaderDetails } from "./PostHeaderDetails.jsx";

export default {
  title: "Post/Header/Header",
  component: PostHeader,
};

export const Primary = (args) => (
  <>
    <PostHeader {...args}>
      <PostHeaderTitle />
      <PostHeaderDetails />
    </PostHeader>
  </>
);
