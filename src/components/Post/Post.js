import React from "react";
import Comment from "../Comment/Comment";
import "./Post.css";
import moment from "moment";

const Post = ({ photo }) => {
  return (
    <div>
      <h3 className="post-username">
        <a
          className="post-user-name"
          href={`https://www.instagram.com/${photo.user.username}`}
        >
          {photo.user.username}
        </a>
      </h3>
      <a href={photo.link}>
        <img
          className="post-image"
          src={photo.images.standard_resolution.url}
        />
      </a>
      <p className="photo-date">
        {moment.unix(photo.created_time, "x").format("MMM DD YYYY hh:mm a")}
      </p>
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
