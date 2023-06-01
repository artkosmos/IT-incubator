import React from "react";

type StarValueType = 1 | 2 | 3 | 4 | 5

type PropsType = {
  selected: boolean
  value: StarValueType
  callBack: (value: StarValueType) => void
}

function Star(props: PropsType) {
  console.log('Star rendering')
  return (
    <span onClick={() => props.callBack(props.value)}>
      {props.selected ? <b>star </b> : <>star </>}
    </span>
  )
}

export default Star;