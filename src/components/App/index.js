import React, { Component } from "react";
import Gallery from "../Gallery";
import "./App.css";
import photos from "../../photos.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: photos.data,
      photoFilters: [],
      filterCount: photos.data.length,
      pager: {}
    };
  }

  componentDidMount() {
    this._getPhotoFilters();
  }

  _setPage = page => {};

  _getPhotoFilters = () => {
    let arr = [];
    this.state.data.forEach(item => {
      if (arr.indexOf(item.filter) === -1) {
        arr.push(item.filter);
      }
    });

    this.setState({
      photoFilters: arr
    });
  };

  onChangeFilter = e => {
    let originalPhotos = photos.data;
    if (e.target.value === "all") {
      this.setState({
        data: originalPhotos,
        filterCount: originalPhotos.length
      });
      return;
    }
    let arr = originalPhotos.filter(d => d.filter === e.target.value);

    this.setState({
      data: arr,
      filterCount: arr.length
    });
  };

  render() {
    const { data, photoFilters, filterCount } = this.state;
    return (
      <Gallery
        data={data}
        photoFilters={photoFilters}
        onChangeFilter={this.onChangeFilter}
        filterCount={filterCount}
      />
    );
  }
}
