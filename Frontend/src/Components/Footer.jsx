import React from "react";
import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small unique-color-dark mt-3">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <h5 className="mb-0">Outliers Team</h5>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center">
          © 2019 Nasa Space Apps:
          <a href="https://2019.spaceappschallenge.org/challenges/planets-near-and-far/raiders-lost-data/teams/outliers/project">
            {" "}
            outliersteam.com
          </a>
        </div>
      </footer>
    );
  }
}
