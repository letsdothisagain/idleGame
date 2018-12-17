import React, { Component } from 'react';
import ProgressBarAddressable from "./components/ProgressBarAddressable";
import TotalScore from './components/TotalScore';
import './App.css';


const tilenumbers = [1000, 10, 1];
const listTiles = tilenumbers.map((tilenumber) =>
  <ProgressBarAddressable tileowned={tilenumber} />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      percentage: undefined,
      totalscore: undefined,
      numberOfTiles: tilenumbers
    };

    this.addTile = this.addTile.bind(this)
    this.updateTileList = this.updateTileList.bind(this)

  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.numberOfTiles != nextState.tilenumbers;
  }

  addTile () {
    tilenumbers.push(1);
    console.log(tilenumbers)
    this.setState({ numberOfTiles: tilenumbers })
  }

  updateTileList = () => {
  this.props.tileowned(this.state)
}

  render() {
    return (
      <div className="App">

        <TotalScore />
        <div style={{ margin: '20px 0' }}>  
            <button onClick={this.addTile}>
              <span>Add Tile</span>
            </button>  
        </div>
        {listTiles}


      </div>
    );
  }
}

export default App;