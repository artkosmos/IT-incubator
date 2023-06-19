import React from 'react';

export const Content = () => {
	return (
		<div>
			<div>
				<div>HEADING</div>
				<div>ABOUT</div>
			</div>
			<div style={{display: "flex", justifyContent: "center"}}>
				<button  style={{margin: "20px", width: "100px", height: "50px"}}>Back</button>
				<button  style={{margin: "20px", width: "100px", height: "50px"}}>Home</button>
			</div>
		</div>
	);
};
