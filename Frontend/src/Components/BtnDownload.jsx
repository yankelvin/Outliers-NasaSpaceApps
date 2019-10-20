import React from "react";
import { Component } from "react";

export class BtnDownload extends Component {
  constructor(props) {
    super(props);
    this.state = { csv: null };
    this.downloadCsv = this.downloadCsv.bind(this);
  }

  downloadCsv() {
    if (this.state.csv === null) {
      alert("Nenhum arquivo retornado :C");
    }
  }

  render() {
    return (
      <div className="mb-3 mt-4" style={{ textAlign: "center" }}>
        <a
          href="../../comets_final.csv"
          id="btnDownload"
          className="inputShadow btn btn-secondary"
          download="file.csv"
        >
          Download CSV
        </a>
      </div>
    );
  }
}
