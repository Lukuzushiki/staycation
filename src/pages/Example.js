import React, { Component } from "react";

import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageRef: "" },
      { pageTitle: "House Details", pageRef: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Breadcrumb data={breadcrumb} />
        </div>
      </div>
    );
  }
}
