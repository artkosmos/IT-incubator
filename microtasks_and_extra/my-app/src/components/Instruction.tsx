import React from 'react';
import style from "./Instraction.module.css";
import {Display} from "./Display";
import {Button} from "./Button";
import {Input} from "./Input";

export const Instruction = () => {
  return (
    <div>
      <div className={style.instruction}>
        <div className={style.contentWrapper}>
          <Display using={'instruction'} counter={1} maxValue={1}/>
          <div className={style.buttonsArea}>
            <Button using={'instruction'} callBack={()=>{}}>SET</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
