import React from 'react';
import {EachSoldCar} from './eachsoldcar.jsx';


var SoldCarInventoryList = (props) => {


  return(<div>
    {props.cars.map(car =>
      <EachSoldCar
      car = {car}
      />
      )}
  </div>)

}



export {SoldCarInventoryList}