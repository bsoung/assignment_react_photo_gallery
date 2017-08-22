import React, { Component } from "react";
import "./App.css";
import photos from "../../photos.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: photos.data
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Gallery data={this.state.data} />
      </div>
    );
  }
}

export default App;
