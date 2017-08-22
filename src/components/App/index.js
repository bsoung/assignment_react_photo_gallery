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
      currentPhotos: photos.data.slice(0, 12),
      filterCount: 12,
      currentPage: 1,
      photosPerPage: 12
    };
  }

  componentDidMount() {
    this._getPhotoFilters();

    // this._pagination();
  }

  componentDidUpdate() {}

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

  _pagination = e => {
    const { currentPage, photosPerPage, data } = this.state;
    const indexOfLastPhoto = e.target.id * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = data.slice(indexOfFirstPhoto, indexOfLastPhoto);

    this.setState({
      currentPhotos: currentPhotos,
      currentPage: Number(e.target.id),
      filterCount: currentPhotos.length
    });
  };

  handleClick = e => {
    this._pagination(e);
  };

  onChangeFilter = e => {
    // let originalPhotos = this.state.currentPhotos.slice();

    // if (e.target.value === "all") {
    //   this.setState({
    //     currentPhotos: originalPhotos,
    //     filterCount: originalPhotos.length
    //   });
    //   return;
    // }

    this.setState({
      currentPhotos: this.state.currentPhotos.filter(
        d => d.filter === e.target.value
      ),
      filterCount: this.state.currentPhotos.length
    });
  };

  render() {
    const {
      data,
      photoFilters,
      currentPage,
      photosPerPage,
      currentPhotos,
      filterCount
    } = this.state;

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
        handleClick={this.handleClick}
      />
    );
  }
}
