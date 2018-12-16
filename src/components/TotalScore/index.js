import React from 'react';

export function updateScore(totalscore) {
    this.setState({totalscore})
}

class TotalScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalscore: 0
        }
        updateScore = updateScore.bind(this)
    }
    render() {
        return (
  			<div className="total-score "><span className="title">Score:</span><div className="odometer">{this.state.totalscore}</div></div>
  			)
	}
}


export default TotalScore;