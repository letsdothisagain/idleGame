import React from 'react';

class HitValue extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (
      <h2 className="hitValue col-lg-4">Hit for: <span>{this.props.hitvalue}!</span></h2>
    )
  }  
}

export default HitValue;