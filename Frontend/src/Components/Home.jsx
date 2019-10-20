import React from "react";
import { Component } from "react";
import "./Home.css";

// Components
import { Logo } from "./Logo";
import { Footer } from "./Footer";
import { InputFile } from "./InputFile";
import { BtnDownload } from "./BtnDownload";

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <Logo id="logo"></Logo>

          <div className="mt-4 mb-5">
            <h4 style={{ textAlign: "center" }}>
              Upload your CSV file with missing data and receive the respective
              CSV with imputed values.
            </h4>
          </div>

          <InputFile></InputFile>

          <BtnDownload></BtnDownload>

          <Footer></Footer>
        </div>
      </div>
    );
  }
}
