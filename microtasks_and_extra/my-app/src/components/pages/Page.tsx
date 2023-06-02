import React from "react";
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
  pages: PagesType[]
}

export const Page = (props: PropsType) => {

  const params = useParams()
  console.log(params)

  const infoID = Number(params.id)


  return (
    <div>
      {props.pages[infoID]
        ? <div>{props.pages[infoID].heading}{props.pages[infoID].about}</div>
        : <Error404/>}
      <button>Main page</button>
      <button>Go Back</button>
    </div>
  )
}

// если есть такой путь рисуйся, если путь не совпадает то выдавать 404 ошибку
