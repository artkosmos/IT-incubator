import React from 'react';

type ContentPagePropsType = {
	heading: number
	about: number
}

export const Content = (props: ContentPagePropsType) => {
	return (
		<div>
			<div>
				<div>{props.heading}</div>
				<div>{props.about}</div>
			</div>
			<div style={{display: "flex", justifyContent: "center"}}>
				<button  style={{margin: "20px", width: "100px", height: "50px"}}>Back</button>
				<button  style={{margin: "20px", width: "100px", height: "50px"}}>Home</button>
			</div>
		</div>
	);
};
