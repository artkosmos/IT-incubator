import React from 'react';
import {City} from "./City";
import {BanknotesType, MoneyType} from "./App";

type CountryPropsType = {
  data: MoneyType[]
  setFilterValue: (filterValue: BanknotesType) => void
  deleteBanknote: (id: number) => void
}

export const Country = (props: CountryPropsType) => {
  const setAll = () => {
    props.setFilterValue('All')
  }

  const setDollars = () => {
    props.setFilterValue('Dollars')
  }

  const setRUBLES = () => {
    props.setFilterValue('Rubles')
  }

  return (
    <div>
      <button onClick={setAll}>All</button>
      <button onClick={setDollars}>Dollars</button>
      <button onClick={setRUBLES}>RUBLES</button>
      <City
        data={props.data}
        deleteBanknote={props.deleteBanknote}
      />
    </div>
  );
};

