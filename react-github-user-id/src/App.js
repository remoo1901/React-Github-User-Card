import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followersData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/remoo1901")
      .then(info => this.setState({ userData: info.data }))
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/remoo1901/followers")
      .then(x => this.setState({ followersData: x.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to my GitHub Account</h1>
        </header>
        <h4>Login: {this.state.userData.login}</h4>
        <h2>Name: {this.state.userData.name}</h2>
        <img
          width="200px"
          height="200px"
          src={this.state.userData.avatar_url}
          alt="avatar"
        />

        <h1>My Followers</h1>
        <div>
          {this.state.followersData.map(follower => {
            return (
              <div>
                <p>Login: {follower.login}</p>
                <img
                  width="200px"
                  height="200px"
                  src={follower.avatar_url}
                  alt={follower.login}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
