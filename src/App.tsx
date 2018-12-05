import React, { Component } from "react";
import "./App.css";
import { loadModel, isModelLoaded } from "./Model";
import { EmotionRegister } from "./EmotionRegister";

class App extends Component {
  state = {
    isModelLoaded: false
  };

  async componentDidMount() {
    await loadModel();
    this.setState({
      isModelLoaded: isModelLoaded()
    });
  }

  render() {
    const { isModelLoaded } = this.state;
    return (
      <div className="App">
        <p>Model loaded : {isModelLoaded ? "it is loaded" : "not yet"}</p>
        <EmotionRegister emotion="negative" />
        <EmotionRegister emotion="positive" />
      </div>
    );
  }
}

export default App;
