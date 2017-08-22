import React from "react";
import User from "../User/User";
import "./Comment.css";

const Comment = ({ comment }) =>
  <div className="comment">
    <div>
      <User user={comment.from} />
    </div>
    <div>
      <p>
        Date: {comment.created_time}
      </p>
      <p>
        Comment: {comment.text}
      </p>
    </div>
  </div>;

export default Comment;
