import React from "react";
import Post from "../Post/Post";
import "./Gallery.css";

const Gallery = props => {
	return (
		<div className="gallery">
			{props.data.map(item => <Post photo={item} key={item.user.id} />)}
		</div>
	);
};

export default Gallery;
