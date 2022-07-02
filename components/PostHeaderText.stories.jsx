import React from "react";
import { PostHeaderText } from "./PostHeaderText";
import { PostHeaderTitle } from "./PostHeaderTitle";
import { PostHeaderDetails } from "./PostHeaderDetails.jsx";

export default {
  title: "Post/Header/Text",
  component: PostHeaderText,
};

export const Primary = (args) => (
  <>
    <PostHeaderText {...args}>
      <PostHeaderTitle />
      <PostHeaderDetails />
    </PostHeaderText>
  </>
);
