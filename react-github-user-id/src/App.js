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
      .then(x => {
        this.setState({ followersData: x.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="github">Welcome to my GitHub Account</h1>
        </header>

        <img
          className="image"
          width="300px"
          height="300px"
          src={this.state.userData.avatar_url}
          alt="avatar"
        />
        <a className="url" href={this.state.userData.html_url}>
        <h4 className="url">Login: {this.state.userData.login}</h4>
        <h2 className="url">Name: {this.state.userData.name}</h2>
         </a>

        <div>
          <p className="followersHeader">Followers</p>
          <div className="followers">
            {this.state.followersData.map(follower => {
              return (
                <div>
                  <a className="url" href={follower.html_url}>
                    <img
                      className="image"
                      width="180px"
                      height="180px"
                      src={follower.avatar_url}
                      alt={follower.login}
                    />
                    <p>{follower.login}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
