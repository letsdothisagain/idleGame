import React from 'react';

const ProgressAmount = (props) => {
    return (
      <p className="proamount"><span>{props.percentage}</span> / 100</p>
    )
  }  

export default ProgressAmount;