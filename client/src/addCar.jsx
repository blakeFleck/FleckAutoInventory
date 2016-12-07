import React from 'react'

class AddCar extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      make:'',
      model:'',
      last4:'',
      repairs:0,

    }
  }
   handleChangeMake(event) {
    this.setState({make: event.target.value});
  }
   handleChangeModel(event) {
    this.setState({model: event.target.value});
  }
  handleChangeLast4(event) {
    this.setState({last4: event.target.value});
  }
  addVehicle(){
    this.props.addVehicleSubmit(this.state)
  }
  render(){
    return(<div>
      <h1>Add Vehicle</h1>
      <p>
        Make:
        <input type="text" onChange={this.handleChangeMake.bind(this)} value={this.state.make} />
      </p>
      <p>
       Model:
       <input type="text" onChange={this.handleChangeModel.bind(this)} value={this.state.model}/>
       </p>
       <p>
       Last4:
       <input type="number" onChange={this.handleChangeLast4.bind(this)} value={this.state.last4}/>
       </p>
      <button onClick={this.addVehicle.bind(this)}>New Vehicle</button>
      </div>)
  }


}

export {AddCar}