import React from 'react';
import {Car} from './car.jsx';

var CarList = (props) => {

  return(<div>
    <h1> Current Inventory </h1>
    {props.cars.map(car => <Car car = {car} /> )}
  </div>)
}

export {CarList}