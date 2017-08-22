import React from "react";
import Post from "../Post/Post";
import Search from "../Search/Search";
import "./Gallery.css";

export default props => {
	return (
		<div className="gallery">
			<Search {...props} />
			{props.data.map(item => <Post {...item} key={item.user.id} />)}
		</div>
	);
};
