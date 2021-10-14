import logo from "../images/ActyvLogo.svg";
import React, { Component } from "react";
import { Input } from "@chakra-ui/react";

class NavBar extends Component {
  state = {};
  componentDidMount() {
    this.setState({ inputValue: this.props.inputValue });
  }

  handleChange = (event) => {
    const { itemFilterOnChange } = this.props;
    console.log(itemFilterOnChange);
    this.setState(
      {
        inputValue: event.target.value,
      },
      () => {
        console.log(itemFilterOnChange);
        itemFilterOnChange(event);
      }
    );
  };

  render() {
    const { contersList, totalCounters } = this.props;
    return (
      <nav class="navbar navbar-light bg-dark">
        <img class="ml-5 mr-5" src={logo} alt="Logo" />
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Search for Items"
          class="form-control d-inline-block"
          style={{ width: "200px", height: "35px" }}
        ></input> */}
        <a class="navbar-brand mx-auto" href="#">
          {/* <button type="button" class="btn btn-light">
            Items in Cart:{" "}
            <span class="badge badge-light">{totalCounters}</span>
          </button> */}
        </a>
      </nav>
    );
  }
}

export default NavBar;
