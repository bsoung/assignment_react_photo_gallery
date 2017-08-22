import React from "react";
import Post from "../Post";
import Search from "../Search";
import "./Gallery.css";

export default props => {
  const renderPageNumbers = props.pageNumbers.map(number => {
    return (
      <li key={number} onClick={props.handleClick} id={number}>
        {number}
      </li>
    );
  });
  return (
    <div>
      <div className="gallery">
        <Search {...props} />
        {props.data.map(item => <Post {...item} key={item.user.id} />)}
      </div>
      <div className="page-numbers">
        {renderPageNumbers}
      </div>
    </div>
  );
};
