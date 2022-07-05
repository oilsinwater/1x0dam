import React from "react";
import { PostNoteOnly, PostNote, PostNoteLarge } from "./PostNote";
import { NoteCover, NoteCoverLarge } from "./NoteCover";
import { NoteText } from "./NoteText";

export default {
  title: "Post/Note",
  component: PostNote,
  subcomponents: { NoteCover, NoteCoverLarge, NoteText },
};

const ContentOnly = (args) => <PostNoteOnly {...args} />;
export const Primary = ContentOnly.bind({});
ContentOnly.args = {
  primary: true,
};

const Regular = (args) => <PostNote {...args} />;
export const Secondary = Regular.bind({});
Regular.args = {
  secondary: true,
};

const Large = (args) => <PostNoteLarge {...args} />;
export const Tertiary = Large.bind({});
Large.args = {
  tertiary: true,
};
