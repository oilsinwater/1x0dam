import React from 'react';
import { PostBlock } from './PostBlock';
import { PostRow } from './PostRow';

export default {
  title: 'Block/Row',
  component: PostRow,
};

export const Primary = (args) => (
    <PostRow {...args}>
      <PostBlock />
    </PostRow>
);
