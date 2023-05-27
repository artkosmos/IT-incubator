import React from "react";
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";

type PropsType = {
  pages: PagesType[]
}

export const Page = (props: PropsType) => {

  const params = useParams()
  console.log(props.pages[Number(params.id)])

  return (
    <div>
      {props.pages[Number(params.id)].heading}
      {props.pages[Number(params.id)].about}
    </div>
  )
}

// если есть такой путь рисуйся, если путь не совпадает то выдавать 404 ошибку
