import React from 'react';
import { PostHeaderText } from './PostHeaderText';
import { PostHeader } from './PostHeader';

export default {
  title: 'Post/Header',
  component: PostHeader,
}

export const Primary = (args) => (
  <>
    <PostHeader {...args}>
      <PostHeaderText />
    </PostHeader>
  </>
);
