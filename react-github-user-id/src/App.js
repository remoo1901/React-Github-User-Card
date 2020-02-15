import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component () {
  constructor(){
    super()
    this.State ={
      userData: {},
      followersData: []
    }
  }

  componentDidMount(){
  axios 
  .get('https://api.github.com/users/remoo1901')
  .then( res => res.json())
  .then(x => this.setState({userData: x.data}))
  .catch(err => console.log(err))

  }
  
  render(){
  return (
    <div className="App">
      
    </div>
  );
  }
}

export default App;
