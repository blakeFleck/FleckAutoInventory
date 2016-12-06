// Your front end code here!
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {CarList} from './carList.jsx';
import {AddCar} from './addCar.jsx';
import {SoldCar} from './soldCar.jsx';
import {AddRepair} from './addRepair.jsx';
import {SoldCarInventoryList} from './soldcarinventory.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: [],
      soldCars: [{make:"Lexus",
    model:"GS",
    last4: 40000}],
    }
  }

  componentWillMount (){
    var self = this;
    $.ajax({
      url: 'http://localhost:3000/vehicles',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        self.setState({
          cars: data
        });
      },
      error: function(xhr, textStatus, error) {
        console.log('text status', textStatus, 'error', error);
      }
    });

  }
  addVehicleSubmit(car){
    console.log(car, 'this is car')
    var self = this;
    $.ajax({
      url: 'http://localhost:3000/vehicles',
      method: 'POST',
      dataType: 'json',
      data: car,
      success: function(data) {
        self.setState({
          cars: self.state.cars.concat(data)
        });
      },
      error: function(xhr, textStatus, error) {
        console.log('text status', textStatus, 'error', error);
      }
    });

  }
  soldVehicleSubmit(car){
    var sold = this.state.cars.filter(function (veh) {return Number(veh.last4) === Number(car.last4)});
    this.state.soldCars.push(sold[0])
    this.setState({ cars: this.state.cars.filter(function (veh) {return Number(veh.last4) != Number(car.last4)})})
  }
  addRepairSubmit(car){

    var current = this.state.cars.filter(function (veh) {
      return Number(veh.last4) == Number(car.last4)
    })
    current[0].repairs += Number(car.repair)
    this.setState({ cars : this.state.cars })
  }


  render () {
    return (<div>
      <AddCar addVehicleSubmit = {this.addVehicleSubmit.bind(this)} />
      --------------Current Inventory Tracker--------
      ---------------------------------------------
      <CarList cars = {this.state.cars} />
      --------------Add to Sold Inventory--------
      ---------------------------------------------

      <SoldCar soldVehicleSubmit={this.soldVehicleSubmit.bind(this)}/>
      --------------Add Repair--------------------
      ---------------------------------------------
      <AddRepair addRepairSubmit={this.addRepairSubmit.bind(this)}/>
      --------------Sold Inventory Tracker--------
      ---------------------------------------------
      <SoldCarInventoryList cars = {this.state.soldCars}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
