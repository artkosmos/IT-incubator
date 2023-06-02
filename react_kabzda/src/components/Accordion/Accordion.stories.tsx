import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from "./Accordion";


const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const CollapsedMenu: Story = {
  render: () => <Accordion title={"Our drink menu"} collapsed={true} callBack={() => {}}/>
}

export const OpenedMenu: Story = {
  render: () => <Accordion title={"Our drink menu"} collapsed={false} callBack={() => {}}/>
}

const InteractiveMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
  return <Accordion title={"Our drink menu"} collapsed={isCollapsed} callBack={() => {setIsCollapsed(!isCollapsed)}}/>
}

export const InteractiveRating: Story = {
  render: () => <InteractiveMenu/>
}
