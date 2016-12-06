import React from 'react';
import {Car} from './car.jsx';

var CarList = (props) => {

  return(<div>
    {props.cars.map(car => <Car car = {car} /> )}
  </div>)
}

export {CarList}