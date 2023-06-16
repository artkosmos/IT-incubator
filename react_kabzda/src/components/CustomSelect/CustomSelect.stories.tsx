import type {Meta, StoryObj} from '@storybook/react';
import {CustomSelect} from "./CustomSelect";


const meta: Meta<typeof CustomSelect> = {
  title: 'CustomSelect',
  component: CustomSelect,
}

export default meta

type Story = StoryObj<typeof CustomSelect>

export const MenuLikeSelect: Story = {
  render: () => <CustomSelect/>
}