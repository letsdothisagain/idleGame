import React, { Component } from 'react';
import ProgressBarAddressable from "./components/ProgressBarAddressable";
import TotalScore from './components/TotalScore';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      percentage: undefined,
      totalscore: undefined
    };

  }

  render() {
    return (
      <div className="App">

        <TotalScore />
        <ProgressBarAddressable />
        <ProgressBarAddressable />
        <ProgressBarAddressable />

      </div>
    );
  }
}

export default App;