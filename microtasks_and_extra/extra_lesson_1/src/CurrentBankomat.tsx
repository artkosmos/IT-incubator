import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
  money: MoneyType
  deleteBanknote: (id: number) => void
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

// на кнопке делаем onClick который отправит вызов функции со значением id  компонента
  return (
    <Banknote color={props.money.banknotes === 'Dollars' ? 'yellowgreen' : 'steelblue'}>
      <Name>{props.money.banknotes}</Name>
      <Nominal>{props.money.value}</Nominal>
      <Delete onClick={() => props.deleteBanknote(props.money.id)}>x</Delete>
    </Banknote>
  );
};
// могут принимать пропсы и меняться в зависимости от данных
const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'yellowgreen') return 'yellowgreen'
    return 'steelblue'
  }};
  position: relative;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const Delete = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`
const Name = styled.span`
  display: flex;
  justify-content: center;
`
const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;
`
/*const BanknotesGreen = styled.div`
  background-color: yellowgreen;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const BanknotesBlue = styled.div`
  background-color: orange;
  width: 400px;
  height: 200px;
  margin: 10px;
`*/


