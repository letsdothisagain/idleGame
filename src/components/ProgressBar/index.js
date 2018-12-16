import React from 'react';
import ProgressBarFiller from '../ProgressBarFiller';
import ProgressAmount from '../ProgressAmount';
import './style.css';

const ProgressBar = (props) => {
  return (
      <div className="progress-bar col-lg-8">
        <ProgressBarFiller percentage={props.percentage} />
        <ProgressAmount percentage={props.percentage} />
      </div>
    )
}

export default ProgressBar;