import React from 'react';
import ProgressBar from '../ProgressBar';
import TileButton from '../TileButton';
import HitValue from '../HitValue';
import { TotalScore, updateScore } from '../TotalScore';



var score = 0;

class ProgressBarAddressable extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      percentage: 0,
      hitvalue: 0,
      totalscore: 0
    }

    this.nextStep = this.nextStep.bind(this)
    this.getRandom = this.getRandom.bind(this);
  }
  componentDidMount(){
   var intervalId = setInterval(this.nextStep, 900);
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  nextStep() {
 
    let amount = Math.floor(Math.random() * (80 - 0) + 1);
    this.setState({ hitvalue: amount})
    let currentPercentage = this.state.percentage;
    let additivePercentage = currentPercentage + amount;

    if(additivePercentage < 100)
    {
      let finalPercentage = this.state.percentage + amount;
      //console.log(finalPercentage);
      this.setState({ percentage: this.state.percentage + amount })
    } else {
      this.setState({ percentage: 0})
      score = score + 1;

    }
    updateScore(score);
    console.log(score);

  }


  
  render() {
    return (
      <div className="tile container">
      <div className="row">
        <div className="col-lg-2">
          <div className="avatar"></div>
        </div>
        <div className="col-lg-10">
        <h2 className="heading">Progress:</h2>
          <div className="row">

            <ProgressBar percentage={this.state.percentage} />
            <HitValue hitvalue={this.state.hitvalue} />
          </div>
          <div style={{ margin: '20px 0' }}>  
            <button onClick={this.nextStep}>
              <span>Attack</span>
            </button>  
          </div>   
      
        </div>
        </div>
      </div>
    )
  }  
}

export default ProgressBarAddressable;