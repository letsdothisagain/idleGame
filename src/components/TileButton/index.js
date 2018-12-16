import React from 'react';
//import * as utils from './utils.js'; 
import './style.css';


class TileButton extends React.Component {
	 constructor(props) {
    super(props)
    
    this.nextStep = this.nextStep.bind(this)
  }

  nextStep() {
  	console.log('something');
    if(this.state.percentage === 100)
    {
      //console.log('something');
      
      this.setState({ percentage: 0})
    } else { 
      this.setState({ percentage: this.state.percentage + 5 })
    }

  }

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick = {this.nextStep}>Primary</button>
    )
  }  
}

export default TileButton;