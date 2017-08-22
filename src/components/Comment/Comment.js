import React from "react";
import User from "../User/User";

const Comment = ({ comment }) =>
  <div>
    <p>
      Date: {comment.created_time}
    </p>
    <p>
      Text: {comment.text}
    </p>
    <p>
      <User user={comment.from} />
    </p>
  </div>;

export default Comment;
