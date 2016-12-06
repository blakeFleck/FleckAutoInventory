import React from 'react'


class SoldCar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      last4: '',
      price: '',
    }

  }
  soldVehicle(){
    this.props.soldVehicleSubmit(this.state);
    this.setState({
      last4:'',
      price:''
    })
  }
  handleVinSold(event) {
    this.setState({last4: event.target.value});

  }
  handlePriceSelector(event){
    this.setState({price: event.target.value});
  }

  render(){
    return(
      <div>

      <div>Select Vehicle by Last 4 of Vin:
      <input type="number" onChange={this.handleVinSold.bind(this)}></input>
      </div>
      <div>What was Purchase Price:
      <input type="number" onChange={this.handlePriceSelector.bind(this)}></input>
      </div>
      <button onClick={this.soldVehicle.bind(this)}>Confirm Sold Vehicle</button>
      </div>)


  }
}

export {SoldCar}