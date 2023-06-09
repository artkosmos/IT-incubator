import React from 'react';
import style from "./Counter.module.css";
import {Display} from "./Display";
import {Button} from "./Button";
import {ValuesType} from "../App";

type CounterPropsType = {
  values: ValuesType
  currentValue: number
  increment: () => void
  reset: () => void
  maxInputError?: boolean
  minInputError?: boolean
}

export const Counter = ({
                          values,
                          increment,
                          reset,
                          currentValue,
                          maxInputError,
                          minInputError,
                        }: CounterPropsType) => {
  return (
    <div className={style.counter}>
      <div className={style.contentWrapper}>
        <Display
          values={values}
          counter={currentValue}
          maxInputError={maxInputError}
          minInputError={minInputError}
        />
        <div className={style.buttonsArea}>
          <Button using={'counter'} callBack={increment} disabled={currentValue === values.max}>ADD</Button>
          <Button using={'counter'} callBack={reset} disabled={currentValue === values.min}>RESET</Button>
        </div>
      </div>
    </div>
  );
};
