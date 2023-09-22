import { Component } from "react";
export default class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
  };
  handleFirstNameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fname: this.state.firstname,
      lname: this.state.lastname,
    });
  };
  render() {
    return (
      <div>
        Form
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.firstname}
            onChange={this.handleFirstNameChange}
          ></input>
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.handleLastNameChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
