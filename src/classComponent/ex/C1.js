import React from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("mount");
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("didMount");
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("didUpdate");
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
