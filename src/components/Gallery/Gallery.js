import React from "react";
import Post from "../Post/Post";

const Gallery = props => {
	return (
		<div>
			Gallery component
			{props.data.map(item => <Post photo={item} />)}
		</div>
	);
};

export default Gallery;
