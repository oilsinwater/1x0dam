
import React from 'react';
import { NoteCover, NoteCoverLarge } from './NoteCover';

export default {
  title: 'Note/Cover',
  component: NoteCover,
};

const Template = args => <NoteCover {...args} />;
const TemplateB = args => <NoteCoverLarge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
}

export const Secondary = TemplateB.bind({});
Secondary.arg = {
  secondary: true,
}
