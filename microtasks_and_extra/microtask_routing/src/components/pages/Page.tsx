import React from "react";
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
  pages: PagesType[]
}

export const Page = (props: PropsType) => {

  const params = useParams()

  const infoID = Number(params.id)

  if (isNaN(infoID)) {
    return <Error404/>
  }

  return (
    <div>
      {props.pages[infoID].heading}
      {props.pages[infoID].about}
    </div>
  )
}

// если есть такой путь рисуйся, если путь не совпадает то выдавать 404 ошибку
