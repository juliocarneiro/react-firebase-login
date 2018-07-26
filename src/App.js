import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import fire from './config/Fire'

import Membros from './components/Membros'
import Home from './components/Home'
import Login from './components/login'

class App extends Component {
  state = {
      user:null,
  }

  componentDidMount(){
    this.authListener()
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user)
      if(user){
        this.setState({user})
        localStorage.setItem('user', user.uid)
      } else{
        this.setState({user: null})
        localStorage.removeItem('user')
      }
    })
  }

  render() {
    return (
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/membros" component={this.state.user ? (Membros) : (Login)} />
          <Route path="/membros" component={Membros}/>
      </Switch>
    );
  }
}

export default App;