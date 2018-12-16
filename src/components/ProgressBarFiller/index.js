import React from 'react';
//import Progress_Bar_Addressable from '../Progress_Bar_Addressable';
import './style.css';

const ProgressBarFiller = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}


export default ProgressBarFiller;