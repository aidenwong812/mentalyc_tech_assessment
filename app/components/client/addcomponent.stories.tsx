import type { Meta, StoryObj } from '@storybook/react';

import Addcomponent from './addcomponent';

const meta = {
  component: Addcomponent,
} satisfies Meta<typeof Addcomponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};