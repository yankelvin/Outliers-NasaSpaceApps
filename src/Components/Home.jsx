import React from "react";
import { Component } from "react";
import { Footer } from "./Footer";
import "./Home.css";
import axios from "axios";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.submit = this.submit.bind(this);
  }

  submit() {
    alert("Arquivo enviado com sucesso!");
    axios.post();
  }

  render() {
    return (
      <div id="home">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <img
              id="logo"
              className="mt-5 mb-4"
              src={require("../assets/img.jpeg")}
              style={{ width: "450px" }}
            ></img>
          </div>

          <div className="mt-4 mb-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              iaculis ligula. Vivamus hendrerit tristique faucibus. Pellentesque
              ac vehicula tellus. Nulla et semper metus. Mauris dignissim neque
              ac tincidunt pharetra. In et nunc lorem. Curabitur id euismod
              ipsum. Cras eleifend, nibh vitae mattis dictum, arcu arcu pulvinar
              arcu, et tempus massa magna eu purus. Sed tincidunt, purus et
              malesuada ultrices, augue felis elementum magna, ut congue leo
              erat et quam. Mauris id erat quis lacus semper pulvinar. Praesent
              vestibulum auctor pellentesque. Phasellus et luctus neque.
            </p>
          </div>

          <div
            className="inputShadow input-group mb-3 mt-3"
            style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
          >
            <input
              type="file"
              className="form-control"
              placeholder="Enter your file here"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                onClick={this.submit}
                className="btn btn-dark"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="mb-3 mt-4" style={{ textAlign: "center" }}>
            <button className="inputShadow btn btn-secondary">
              Baixar arquivo!
            </button>
          </div>

          <Footer></Footer>
        </div>
      </div>
    );
  }
}
