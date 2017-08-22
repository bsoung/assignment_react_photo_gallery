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
      currentPage: 1,
      photosPerPage: 12
      // pageNumbers: []
    };
  }

  componentDidMount() {
    this._getPhotoFilters();
  }

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

  // _getPageNumbers = () => {
  //   const { data, photosPerPage } = this.state;
  //   const pageNumbers = [];
  //   for (let i = 1; i <= Math.ceil(data.length / photosPerPage); i++) {
  //     pageNumbers.push(i);
  //   }

  //   this.setState({
  //     pageNumbers: pageNumbers
  //   });
  // };

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
    const {
      data,
      photoFilters,
      currentPage,
      photosPerPage,
      filterCount
    } = this.state;

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = data.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / photosPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <Gallery
        filterCount={filterCount}
        pageNumbers={pageNumbers}
        data={currentPhotos}
        photoFilters={photoFilters}
        onChangeFilter={this.onChangeFilter}
      />
    );
  }
}
