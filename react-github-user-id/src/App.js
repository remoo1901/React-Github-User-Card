import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component() {
  constructor() {
    super();
    this.State = {
      userData: {},
      followersData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/remoo1901")
      .then(res => res.json())
      .then(info => this.setState({ userData: info.data }))
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/remoo1901/followers")
      .then(x => this.setState({ followersData: x.data.followers }))
      .catch(err2 => console.log(err2));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
