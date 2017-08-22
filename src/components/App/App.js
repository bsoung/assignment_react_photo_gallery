import React, { Component } from "react";
import Gallery from "../Gallery/Gallery";
import "./App.css";
import photos from "../../photos.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: photos.data
    };
  }

  componentDidMount() {}

  render() {
    return <Gallery data={this.state.data} />;
  }
}

export default App;
