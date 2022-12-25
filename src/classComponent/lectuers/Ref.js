import React, { Component, createRef } from "react";

export default class Ref extends Component {
  constructor(props) {
    super(props);

    console.log("dont cry");
  }
  btn = createRef();

  componentDidMount() {
    console.log("ref : ", this.btn.current);
    console.log("ID : ", document.getElementById("btn"));
  }

  render() {
    return (
      <div>
        <button id="btn" ref={this.btn}>
          Ref ID
        </button>
      </div>
    );
  }
}
