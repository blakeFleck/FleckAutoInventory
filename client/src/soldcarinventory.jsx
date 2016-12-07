import React from 'react';
import {EachSoldCar} from './eachsoldcar.jsx';


var SoldCarInventoryList = (props) => {


  return(<div>
    <h1>Sold Vehicle Inventory </h1>
    {props.cars.map(car =>
      <EachSoldCar
      car = {car}
      />
      )}
  </div>)

}



export {SoldCarInventoryList}