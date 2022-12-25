import React from "react";

class AppC extends React.Component {
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this);
  }

  render() {
    console.log(this.state.counter);

    return (
      <h1>
        {this.state.counter}
        <button onClick={(e) => this.handleClick(e)}>+</button>
      </h1>
    );
  }

  componentDidMount() {
    console.log("did mount");
  }
  componentWillUnmount() {
    console.log("will un mount");
  }
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = {
      counter: 0,
      users: { name: "ahmed" },
    };
  }
}

export default AppC;
