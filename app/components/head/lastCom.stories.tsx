import type { Meta, StoryObj } from '@storybook/react';
import "../../globals.css"
import LastCom from './lastCom';

const meta = {
  component: LastCom,
} satisfies Meta<typeof LastCom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};