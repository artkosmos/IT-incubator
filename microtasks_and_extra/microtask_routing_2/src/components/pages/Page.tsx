import React from "react";
import {PagesType} from "../../dataState/dataState";
import {useNavigate, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
  pages: PagesType[]
}

export const Page = (props: PropsType) => {

  const params = useParams()
  const navigate = useNavigate()

  const infoID = Number(params.id)

  const onClickMainPageHandler = () => {
    navigate('/')
  }

  const onClickGoBackHandler = () => {
    navigate(-1)
  }

  return (
    <div>
      {props.pages[infoID]
        ? <div>
            <p>{props.pages[infoID].heading}</p>
            <p>{props.pages[infoID].about}</p>
          </div>
        : <Error404/>}
      <button onClick={onClickMainPageHandler}>Main page</button>
      <button onClick={onClickGoBackHandler}>Go Back</button>
    </div>
  )
}

// если есть такой путь рисуйся, если путь не совпадает то выдавать 404 ошибку
