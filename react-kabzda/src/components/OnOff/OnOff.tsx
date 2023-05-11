import React, {useState} from 'react';
import styled from "styled-components";

export const OnOff = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <WrapperMain>
      <WrapperSecond>
        <Square1 toggle={toggle} onClick={()=> setToggle(true)}>On</Square1>
        <Square2 toggle={toggle} onClick={()=> setToggle(false)}>Off</Square2>
      </WrapperSecond>
      <Circle toggle={toggle}></Circle>
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



