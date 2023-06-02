import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import {ControlledOnOff} from "./ControlledOnOff";


const meta: Meta<typeof ControlledOnOff> = {
  title: 'OnOffToggle',
  component: ControlledOnOff,
}

export default meta

type Story = StoryObj<typeof ControlledOnOff>

export const On: Story = {
  render: () => <ControlledOnOff toggle={true} callBack={()=>{}}/>
}

export const Off: Story = {
  render: () => <ControlledOnOff toggle={false} callBack={()=>{}}/>
}

const InteractiveOnOff = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return <ControlledOnOff toggle={toggle} callBack={setToggle}/>
}

export const InteractiveRating: Story = {
  render: () => <InteractiveOnOff/>
}
