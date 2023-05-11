import Star from "../Star/Star";
import React from "react";

type PropsType = {value :number}

function Rating (props :PropsType) {
  console.log('Rating rendering')

    return (
      <div>
        <Star selected={props.value > 0} />
        <Star selected={props.value > 1} />
        <Star selected={props.value > 2} />
        <Star selected={props.value > 3} />
        <Star selected={props.value > 4} />
      </div>
    )
}

export default Rating;