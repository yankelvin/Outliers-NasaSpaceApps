import React from "react";
import { Component } from "react";

export class Logo extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          id={this.props.id}
          alt="Logo Outliers"
          className="mt-5 mb-4"
          src={require("../assets/img.jpeg")}
          style={{ width: "450px" }}
        ></img>
      </div>
    );
  }
}
