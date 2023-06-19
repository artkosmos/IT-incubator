import React from 'react';
import {PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";

type PagesPropsType = {
	pages: PagesType[]
}

export const Page = (props: PagesPropsType) => {

	const params = useParams()

	return(
		<div>
			<div>{props.pages[Number(params.id)].heading}</div>
			<div>{props.pages[Number(params.id)].about}</div>
		</div>
	);
};