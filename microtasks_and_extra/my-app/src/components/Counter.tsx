import React from 'react';
import style from "./Counter.module.css";
import {Display} from "./Display";
import {Button} from "./Button";

type CounterPropsType = {
  maxValue: number
  minValue: number
  currentValue: number
  increment: () => void
  reset: () => void
}

export const Counter: React.FC<CounterPropsType> = ({
                                                      maxValue,
                                                      increment,
                                                      reset,
                                                      minValue,
                                                      currentValue
                                                    }) => {
  return (
    <div className={style.counter}>
      <div className={style.contentWrapper}>
        <Display minValue={minValue} maxValue={maxValue} counter={currentValue}/>
        <div className={style.buttonsArea}>
          <Button using={'counter'} callBack={increment} disabled={currentValue === maxValue}>ADD</Button>
          <Button using={'counter'} callBack={reset} disabled={currentValue === minValue}>RESET</Button>
        </div>
      </div>
    </div>
  );
};
