import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from "styled-components";

type CityPropsType = {
  data: MoneyType[]
  deleteBanknote: (id: number) => void
}

export const City = (props: CityPropsType) => {
  // отрисовка финальная, метод map вернет столько блоков кода, сколько элементов в пробросилось в data
  const mappedMoney: JSX.Element[] = props.data.map((item, index) => (
    <CurrentBankomat
      money={item}
      key={index}
      deleteBanknote={props.deleteBanknote}
    />
  ))

  return (
    <div>
      <Wrapper>{mappedMoney}</Wrapper>
    </div>
  );
};

// styled стили
// оборачиваем в теги с любым названием и заглавной буквы
// так же называем переменную, styled.(указываем чем хотим чтобы она являлалсь)
// прописываем стили в ``
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 20px;
`
