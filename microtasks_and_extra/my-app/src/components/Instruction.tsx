import React from 'react';
import style from "./Instruction.module.css";
import {Display} from "./Display";
import {Button} from "./Button";

type InstructionPropsType = {
  minValue: number
  maxValue: number
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  maxInputError?: boolean
  setMaxInputError?: (value: boolean) => void
  minInputError?: boolean
  setMinInputError?: (value: boolean) => void
  condition: boolean
  setCondition?: (value: boolean) => void
  instruction: () => void
}

export const Instruction = ({
                              maxValue,
                              minValue,
                              setMaxValue,
                              setMinValue,
                              maxInputError,
                              setMaxInputError,
                              minInputError,
                              setMinInputError,
                              condition,
                              setCondition,
                              instruction
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
            maxInputError={maxInputError}
            setMaxInputError={setMaxInputError}
            minInputError={minInputError}
            setMinInputError={setMinInputError}
            condition={condition}
            setCondition={setCondition}
          />
          <div className={style.buttonsArea}>
            <Button
              using={'instruction'}
              callBack={instruction}
              disabled={minInputError || maxInputError || !condition}
              condition={!condition}
            >SET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
