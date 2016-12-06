import React from 'react';

class UserLogin extends React.Component{

  constructor(props){
    super(props);

    this.state={
      username: '',
      password: '',
    }

  }
  handleChangeOnUsername(event) {
    this.setState({username: event.target.value});
  }
  handleChangeOnPassword(event) {
    this.setState({password: event.target.value});
  }
  onSubmit(){
    this.props.addUserName(this.state)
  }
  render(){

    return(<div>
      <p>UserName:
      <input type="text" value={this.state.username} onChange={this.handleChangeOnUsername.bind(this)}/>
      </p>
      <p>Password:
      <input type="password" value={this.state.password} onChange={this.handleChangeOnPassword.bind(this)}/>
      </p>
      <button onClick={this.onSubmit.bind(this)}>Sign In</button>

      </div>)

  }

}

export {UserLogin}