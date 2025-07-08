import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      name: "Kira",
    };
  }
  render() {
    return (
      <>
        <h2>Welcome to Like Lion</h2>
        <p>Id: {this.state.id}</p>
        <p>Name: {this.state.name}</p>

        <button onClick={() => this.setState({ name: "Mira" })}>Update Name</button>
      </>
    );
  }
}
