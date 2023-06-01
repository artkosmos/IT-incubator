import Star from "../Star/Star";
import React from "react";

type PropsType = {
  value: RatingValueType
  callBack: (value: RatingValueType) => void
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function Rating (props :PropsType) {
  console.log('Rating rendering')

    return (
      <div>
        <Star selected={props.value > 0} value={1} callBack={(value) => props.callBack(value)}/>
        <Star selected={props.value > 1} value={2} callBack={(value) => props.callBack(value)}/>
        <Star selected={props.value > 2} value={3} callBack={(value) => props.callBack(value)}/>
        <Star selected={props.value > 3} value={4} callBack={(value) => props.callBack(value)}/>
        <Star selected={props.value > 4} value={5} callBack={(value) => props.callBack(value)}/>
      </div>
    )
}

export default Rating;