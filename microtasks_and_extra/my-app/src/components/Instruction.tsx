import React from 'react';
import style from "./Instruction.module.css";
import {Display} from "./Display";
import {Button} from "./Button";

type InstructionPropsType = {
  minValue: number
  maxValue: number
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setCounter: () => void
}

export const Instruction = ({
                              maxValue,
                              minValue,
                              setMaxValue,
                              setMinValue,
                              setCounter
                            }: InstructionPropsType) => {
  return (
    <div>
      <div className={style.instruction}>
        <div className={style.contentWrapper}>
          <Display
            using={'instruction'}
            maxValue={maxValue}
            minValue={minValue}
            setMaxValue={setMaxValue}
            setMinValue={setMinValue}
          />
          <div className={style.buttonsArea}>
            <Button using={'instruction'} callBack={setCounter}>SET</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
