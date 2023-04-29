import React from "react";

type PropsType = {selected :boolean}

function Star(props :PropsType) {
  console.log('Star rendering')
  if (props.selected) {
    return <span><b>*  </b></span>
  }
  return (
    <span>*  </span>
  )
}

export default Star;