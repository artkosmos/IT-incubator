import React from 'react';
import styled from "styled-components";

type OnOffPropsType = {
  toggle: boolean
}

export const OnOff = (props: OnOffPropsType) => {
  return (
    <WrapperMain>
      <WrapperSecond>
        <Square1 toggle={props.toggle}></Square1>
        <Square2 toggle={props.toggle}></Square2>
      </WrapperSecond>
      <Circle toggle={props.toggle}></Circle>
    </WrapperMain>
  );
};

const WrapperMain = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`
const WrapperSecond = styled.div`
  display: flex;
  gap: 5px;
`
const Square1 = styled.div<{ toggle: boolean }>`
  background-color: ${props => props.toggle ? 'green' : 'grey'};
  width: 50px;
  height: 50px;
  border: 3px solid;
`
const Square2 = styled.div<{ toggle: boolean }>`
  background-color: ${props => props.toggle ? 'grey' : 'red'};
  width: 50px;
  height: 50px;
  border: 3px solid;
`
const Circle = styled.div<{ toggle: boolean }>`
  background-color: ${props => props.toggle ? 'green' : 'red'};
  width: 20px;
  height: 20px;
  border: 3px solid;
  border-radius: 100%;
`



