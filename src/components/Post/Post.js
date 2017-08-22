import React from "react";
import Comment from "../Comment/Comment";
import "./Post.css";

const Post = ({ photo }) => {
  console.log(photo);
  return (
    <div>
      <h3>
        {photo.user.username}
      </h3>
      <img className="post-image" src={photo.images.standard_resolution.url} />
      <p>
        Likes: {photo.likes.count}
      </p>
      <p>
        Comments:{" "}
        {photo.comments.data.map(c => <Comment comment={c} key={c.id} />)}
      </p>
    </div>
  );
};

export default Post;
