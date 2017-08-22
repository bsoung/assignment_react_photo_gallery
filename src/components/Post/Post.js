import React from "react";
import Comment from "../Comment/Comment";
import "./Post.css";
import moment from "moment";

export default props => {
  return (
    <div>
      <h3 className="post-username">
        <a
          className="post-user-name"
          href={`https://www.instagram.com/${props.user.username}`}
        >
          {props.user.username}
        </a>
      </h3>
      <a href={props.link}>
        <img
          className="post-image"
          src={props.images.standard_resolution.url}
        />
      </a>
      <p className="photo-date">
        {moment.unix(props.created_time, "x").format("MMM DD YYYY hh:mm a")}
      </p>
      <p>
        Likes: {props.likes.count}
      </p>
      <div className="post-comments">
        {props.comments.data.map(c => <Comment comment={c} key={c.id} />)}
      </div>
    </div>
  );
};
