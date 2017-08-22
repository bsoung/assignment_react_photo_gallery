import React from "react";

const User = ({ user }) =>
  <div>
    <p>
      Username: {user.username} ({user.full_name})
    </p>
    <img src={user.profile_picture} />
  </div>;

export default User;
