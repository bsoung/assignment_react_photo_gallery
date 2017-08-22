import React from "react";
import "./User.css";

export default ({ user }) =>
	<div className="user">
		<p>
			Username: {user.username} ({user.full_name})
		</p>
		<img
			className="user-img"
			src="http://www.cs.ubc.ca/nest/imager/contributions/katrinaa/after_f.gif"
		/>
	</div>;


