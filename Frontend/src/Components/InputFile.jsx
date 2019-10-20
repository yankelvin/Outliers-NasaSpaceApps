import React from "react";
import { Component } from "react";
import axios from "axios";

export class InputFile extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFile: null, loaded: 0 };
    this.handleselectedFile = this.handleselectedFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  handleUpload() {
    const endpoint = "http://localhost:5000/api/upload";
    const data = new FormData();
    data.append("file", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post(endpoint, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      })
      .then(res => {
        console.log(res.statusText);
      });
  }

  render() {
    return (
      <div
        className="inputShadow input-group mb-3 mt-3"
        style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="file"
          onChange={this.handleselectedFile}
          className="form-control"
          placeholder="Enter your file here"
        />
        <div className="input-group-append">
          <button
            onClick={this.handleUpload}
            className="btn btn-dark"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
