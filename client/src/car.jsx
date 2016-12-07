import React from 'react';

var Car = (props) => {
  return(<div>
    <div> Make: {props.car.make} </div>
    <div> Model: {props.car.model} </div>
    <div> Last4: {props.car.last4} </div>
    <div> Repairs: {props.car.repairs} </div>
    ----------------------------------------
    </div>)
}

export {Car}