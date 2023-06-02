import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Rating, {RatingValueType} from "./Rating";


const meta: Meta<typeof Rating> = {
  title: 'Rating',
  component: Rating
}

export default meta

type Story = StoryObj<typeof Rating>

export const RatingWithControl: Story = {
  args: {
    value: 0
  }
}

const ControlledRating = () => {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  return <Rating value={ratingValue} callBack={setRatingValue}/>
}

export const InteractiveRating: Story = {
  render: () => <ControlledRating/>
}
