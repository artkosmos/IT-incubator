import React from 'react';
import styled from "styled-components";

type ControlledOnOffPropsType = {
  toggle: boolean
  callBack: (value: boolean) => void
}

export const ControlledOnOff = (props: ControlledOnOffPropsType) => {

  return (
    <Wrapper1>
      <Wrapper2>
        <Square1 toggle={props.toggle} onClick={() => props.callBack(true)}>On</Square1>
        <Square2 toggle={props.toggle} onClick={() => props.callBack(false)}>Off</Square2>
      </Wrapper2>
      <Circle toggle={props.toggle}></Circle>
    </Wrapper1>
  );
};

const Wrapper1 = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`
const Wrapper2 = styled.div`
  display: flex;
  gap: 5px;
`
const Square1 = styled.div<{ toggle: boolean }>`
  background-color: ${props => props.toggle ? 'green' : 'white'};
  width: 50px;
  height: 50px;
  border: 3px solid;
  text-align: center;
`
const Square2 = styled.div<{ toggle: boolean }>`
  background-color: ${props => props.toggle ? 'white' : 'red'};
  width: 50px;
  height: 50px;
  border: 3px solid;
  text-align: center;
`
const Circle = styled.div<{ toggle: boolean }>`
  background-color: ${props => props.toggle ? 'green' : 'red'};
  width: 20px;
  height: 20px;
  border: 3px solid;
  border-radius: 100%;
`



