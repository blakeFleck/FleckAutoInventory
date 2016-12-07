import React from 'react';


class AddRepair extends React.Component{

  constructor(props){

    super(props)
    this.state ={
      last4:'',
      repair:0,
    }
  }
    handleIdChange(event){
      this.setState({ last4: event.target.value })
    }
    handleCostChange(event){
      this.setState({ repair: parseInt(event.target.value) })
    }
    clickedSubmit(){
      this.props.addRepairSubmit(this.state)
    }

  render(){
    return(<div>
      <h1>Add Repair Cost</h1>
      <p>Select Vehicle by Last 4
      <input type='number' onChange={this.handleIdChange.bind(this)}></input>
      </p>
      <p> Please add Cost:
      <input type='number' onChange={this.handleCostChange.bind(this)}></input>
      </p>
      <button onClick={this.clickedSubmit.bind(this)}>Add Repair</button>
      </div>)

  }

}

export {AddRepair}