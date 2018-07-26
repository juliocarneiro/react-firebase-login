import React, { Component } from 'react'
import fire from '../config/Fire'

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: '',
      password: '',
      error:''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        //console.log(error);
        this.setState({error:error.message})
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        //console.log(error);
        this.setState({error:error.message})
      })
  }

  render() {
    return (
      <div className="container" style={{marginTop:"30px"}}>
        <form className="col-lg-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email:</label><br />
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Senha</label><br />
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <p>{this.state.error}</p>
          </div>
          <button type="submit" onClick={this.login} style={{marginRight:"10px"}} className="btn btn-primary">Login</button>
          <button onClick={this.signup} className="btn btn-success">Cadastrar</button>
        </form>
        <div className="col-lg-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac augue sit amet ante pretium tempor. Nunc id porta diam. Suspendisse rutrum quis est ac bibendum. Duis non massa venenatis massa tristique dictum et sit amet nisi. Donec efficitur sed diam ut maximus. Curabitur ac ultrices nisi. Integer eget interdum odio, et pretium arcu.</p>
          <p>Aenean posuere, massa sit amet aliquet scelerisque, est tellus faucibus eros, iaculis pellentesque urna odio sit amet tortor. Sed at sem libero. Nulla aliquam purus ac dui tempus posuere. Duis non auctor metus, quis bibendum lorem. Aliquam placerat nulla sit amet placerat semper. Vivamus nisl orci, egestas non egestas vitae, suscipit nec nisl. Pellentesque molestie vitae lectus sed posuere. Pellentesque a dolor vel ante viverra eleifend. Nulla leo lacus, rutrum id venenatis mollis, tempor at odio.</p>
        </div>
      </div>
    )
  }
}