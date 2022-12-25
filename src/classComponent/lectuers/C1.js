import React, { Component } from "react";

export default class C1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = this.state.count;
  }

  componentDidUpdate() {
    setTimeout(() => {
      document.title = this.state.count;
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count
        </button>
      </div>
    );
  }
}
