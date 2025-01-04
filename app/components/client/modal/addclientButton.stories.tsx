import type { Meta, StoryObj } from '@storybook/react';

import AddclientButton from './addclientButton';

const meta = {
  component: AddclientButton,
} satisfies Meta<typeof AddclientButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setIsShowModal: () => {},
  },
};
