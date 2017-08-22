import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "./Search.css";

export default props => {
	return (
		<div className="search">
			{props.photoFilters.length &&
				<select onChange={props.onChangeFilter}>
					{props.photoFilters.map(f =>
						<option value={f} key={f}>
							{f}
						</option>
					)}
				</select>}
		</div>
	);
};
