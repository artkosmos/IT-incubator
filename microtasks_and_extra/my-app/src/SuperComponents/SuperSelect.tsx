import React, {ChangeEvent} from 'react';

type OptionType = {
  value: string
  label: string
}

type SuperSelectPropsType = {
  callBack: (value: string) => void
  options: OptionType[]
}

export const SuperSelect: React.FC<SuperSelectPropsType> = ({callBack, options,...restProps}) => {

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    callBack(e.currentTarget.value)
  }

  return (
    <select onChange={onChangeHandler}>
      {options.map((item, index) => {
        return (
          <option key={index} value={item.value}>{item.label}</option>
        )
      })}
    </select>
  );
};
