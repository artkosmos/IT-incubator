import React from 'react';

type HomePagePropsType = {
	heading: number
	about: number
}

export const HomePage = (props: HomePagePropsType) => {
	return (
		<div>
			<div>{props.heading}</div>
			<div>{props.about}</div>
		</div>
	);
};
