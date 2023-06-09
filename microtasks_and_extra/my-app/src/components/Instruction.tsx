import React, {useState} from 'react';
import style from "./Instruction.module.css";
import {Display} from "./Display";
import {Button} from "./Button";

type InstructionPropsType = {
  minValue: number
  maxValue: number
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setCounter: () => void
  maxInputError?: boolean
  setMaxInputError?: (value: boolean) => void
  minInputError?: boolean
  setMinInputError?: (value: boolean) => void
}

export const Instruction = ({
                              maxValue,
                              minValue,
                              setMaxValue,
                              setMinValue,
                              setCounter,
                              maxInputError,
                              setMaxInputError,
                              minInputError,
                              setMinInputError
                            }: InstructionPropsType) => {

  // const [isDisabled, setIsDisabled] = useState<boolean>(false)


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
            minInputError={minInputError}
          />
          <div className={style.buttonsArea}>
            <Button
              using={'instruction'}
              callBack={setCounter}
              disabled={maxInputError || minInputError}
              minInputError={minInputError}
              maxInputError={maxInputError}
            >SET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
