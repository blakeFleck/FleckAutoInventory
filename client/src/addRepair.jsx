import React from 'react';


class AddRepair extends React.Component{

  constructor(props){

    super(props)
    this.state ={
      last4:'',
      repair:''
    }
  }
    handleIdChange(event){
      this.setState({ last4: event.target.value })
    }
    handleCostChange(event){
      this.setState({ repair: event.target.value })
    }
    clickedSubmit(){
      this.props.addRepairSubmit(this.state)
    }

  render(){
    return(<div>
      <div>Select Vehicle by Last 4
      <input type='number' onChange={this.handleIdChange.bind(this)}></input>
      </div>
      <div> Please add Cost:
      <input type='number' onChange={this.handleCostChange.bind(this)}></input>
      </div>
      <button onClick={this.clickedSubmit.bind(this)}>Add Repair</button>
      </div>)

  }

}

export {AddRepair}