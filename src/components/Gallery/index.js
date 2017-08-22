import React from "react";
import Post from "../Post";
import Search from "../Search";
import "./Gallery.css";

export default props => {
	return (
		<div className="gallery">
			<Search {...props} />
			{props.data.map(item => <Post {...item} key={item.user.id} />)}
		</div>
	);
};
