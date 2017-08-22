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
      filterCount: 12,
      currentPage: 1,
      photosPerPage: 12,
      currentPhotos: []
    };
  }

  componentDidMount() {
    this._getPhotoFilters();
    this._pagination();
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

  _pagination = () => {
    const { currentPage, photosPerPage, data } = this.state;
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = data.slice(indexOfFirstPhoto, indexOfLastPhoto);

    this.setState({
      currentPhotos: currentPhotos,
      filterCount: currentPhotos.length
    });
  };

  handleClick = event => {
    console.log("???????????");
    console.log(this.state.currentPage);
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  onChangeFilter = e => {
    let originalPhotos = this.state.currentPhotos.slice();

    if (e.target.value === "all") {
      this.setState({
        currentPhotos: originalPhotos,
        filterCount: originalPhotos.length
      });
      return;
    }
    let arr = originalPhotos.filter(d => d.filter === e.target.value);

    this.setState({
      currentPhotos: arr,
      filterCount: arr.length
    });
  };

  render() {
    const {
      data,
      photoFilters,
      currentPage,
      photosPerPage,
      filterCount,
      currentPhotos
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
