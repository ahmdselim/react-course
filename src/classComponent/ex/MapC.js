import React, { Component } from "react";

export default class MapC extends Component {
  constructor(props) {
    super(props);

    this.state = [
      { id: 1, name: "ahmed" },
      { id: 2, name: "reef" },
      { id: 3, name: "saeed" },
    ];
  }
  render() {
    return (
      <div>
        {this.state.map((data, i) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </div>
    );
  }
}
