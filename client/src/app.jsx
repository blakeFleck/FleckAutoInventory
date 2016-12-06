// Your front end code here!
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {CarList} from './carList.jsx';
import {AddCar} from './addCar.jsx';
import {SoldCar} from './soldCar.jsx';
import {AddRepair} from './addRepair.jsx';
import {SoldCarInventoryList} from './soldcarinventory.jsx';
import {UserLogin} from './userlogin.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: [],
      soldCars: [],
      userLoggedIn: false,
      checkSold: false
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
  addUserName(user){
    console.log(user)
    if(user.username === 'blake' && user.password === 'blake'){
      this.setState({
      userLoggedIn : true
      })
    }
  }
  LogOut(){
    this.setState({
      userLoggedIn: false,
      checkSold: false
    })
  }
  CheckSold(){
    this.setState({
      checkSold: true
    })
  }
  render () {

    if(this.state.userLoggedIn === false){
      return(<div>
        <UserLogin
        addUserName = {this.addUserName.bind(this)}
        />
      </div>)

    }else if(this.state.checkSold === false){

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
      <button onClick={this.CheckSold.bind(this)}>Check Sold Cars </button>
      <button onClick={this.LogOut.bind(this)}>Log Out</button>
      </div>)
    }else if(this.state.checkSold === true){

    return(<div>
      --------------Sold Inventory Tracker--------
      ---------------------------------------------
      <SoldCarInventoryList cars = {this.state.soldCars}/>
      --------------------------------------------
      --------------------------------------------
      <button onClick={this.LogOut.bind(this)}>Log Out</button>
    </div>)
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
