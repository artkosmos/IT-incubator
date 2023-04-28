import React from "react";

function Star(props :any) {
  console.log('Star rendering')
  if (props.selected === true) {
    return <span><b>*  </b></span>
  }
  return (
    <span>*  </span>
  )
}

export default Star;