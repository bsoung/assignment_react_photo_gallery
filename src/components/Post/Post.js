import React from "react";
import Comment from "../Comment/Comment";
import "./Post.css";

const Post = ({ photo }) => {
	return (
		<div>
			<h3 className="post-username">
				{photo.user.username}
			</h3>
			<img className="post-image" src={photo.images.standard_resolution.url} />
			<p>
				Likes: {photo.likes.count}
			</p>
			<div className="post-comments">
				{photo.comments.data.map(c => <Comment comment={c} key={c.id} />)}
			</div>
		</div>
	);
};

export default Post;
