import React, { Component } from 'react';
import ProgressBarAddressable from "./components/ProgressBarAddressable";
import TotalScore from './components/TotalScore';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      percentage: undefined,
      totalscore: undefined,
      tilenumbers: [1, 1, 1]
    };

    this.addTile = this.addTile.bind(this)
    this.addTile = this.addTile.bind(this)
  }

  addTile() {
    const tilenumbers = this.state.tilenumbers.concat(1);
    this.setState({ tilenumbers });
  }

  render() {
    const listTiles = this.state.tilenumbers.map((tilenumber, index) => {
      return <ProgressBarAddressable key={index} tileowned={tilenumber} />
    });
    return (
      <div className="App">
        <div className="row">
        <TotalScore />
        <div className="col-lg-6" style={{ margin: '20px 0' }}>  
            <button className="add-tile" onClick={this.addTile}>
              <span>Add Tile</span>
            </button>  
        </div>
        </div>
        {listTiles}


      </div>
    );
  }
}

export default App;