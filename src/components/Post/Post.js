import React from "react";

const Post = props => {
	return (
		<div>
			<h3>
				{props.user.username}
			</h3>
			<img src={props.images.standard_resolution.url} />
			<p>
				Likes: {props.likes.count}
			</p>
			<p>Comments:</p>
		</div>
	);
};

export default Post;
