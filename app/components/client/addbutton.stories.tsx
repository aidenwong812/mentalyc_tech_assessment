import type { Meta, StoryObj } from '@storybook/react';

import Addbutton from './addbutton';

const meta = {
  component: Addbutton,
} satisfies Meta<typeof Addbutton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};