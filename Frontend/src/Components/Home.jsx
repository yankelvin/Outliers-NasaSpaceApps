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

          <InputFile></InputFile>

          <BtnDownload></BtnDownload>

          <Footer></Footer>
        </div>
      </div>
    );
  }
}
