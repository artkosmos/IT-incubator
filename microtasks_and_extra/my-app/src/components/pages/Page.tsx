import React from 'react';
import {PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";
import {HomePage} from "../HomePage";
import {Content} from "../Content";
import {Error404} from "./Error404";

type PagesPropsType = {
	pages: PagesType[]
}

export const Page = (props: PagesPropsType) => {

	const params = useParams()

	return(
		<div>
			{/*<div>{props.pages[Number(params.id)].heading}</div>*/}
			{/*<div>{props.pages[Number(params.id)].about}</div>*/}
			{Number(params.id) === 0
				? <HomePage heading={Number(props.pages[Number(params.id)].heading)} about={Number(props.pages[Number(params.id)].about)}/>
				: props.pages[Number(params.id)]
					? <Content heading={Number(props.pages[Number(params.id)].heading)} about={Number(props.pages[Number(params.id)].about)}/>
					: <Error404/>}
		</div>
	)
}