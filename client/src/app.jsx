// Your front end code here!
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {CarList} from './carList.jsx';
import {AddCar} from './addCar.jsx';
import {SoldCar} from './soldCar.jsx';
import {AddRepair} from './addRepair.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: [],
      soldCars: [],
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

    this.setState({ cars: this.state.cars.concat(car) })

  }
  soldVehicleSubmit(car){
    this.setState({ cars: this.state.cars.filter(function (veh) {return Number(veh.last4) != Number(car.last4)})})
  }
  addRepairSubmit(car){
    this.state.cars.filter(function (veh) { return Number(veh.last4) == Number(car.last4)})[0].repairs+=Number(car.repair)
    this.setState({ cars : this.state.cars })
  }


  render () {
    return (<div>
      <AddCar addVehicleSubmit = {this.addVehicleSubmit.bind(this)} />
      <CarList cars = {this.state.cars} />
      <SoldCar soldVehicleSubmit={this.soldVehicleSubmit.bind(this)}/>
      <AddRepair addRepairSubmit={this.addRepairSubmit.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
