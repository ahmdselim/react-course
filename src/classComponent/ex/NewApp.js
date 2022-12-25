// import React from "react";

// class NewApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0, name: "laptop" };
//     this.plus = this.plus.bind(this);
//   }

//   plus() {
//     this.setState({ counter: this.state.counter + 1 });
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.counter}</h1>
//         <button onClick={(e) => this.plus(e)}>+</button>
//       </>
//     );
//   }
// }

// export default NewApp;

import React from "react";

class NewApp extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  plus() {
    this.setState({ counter: this.state.counter + 1 });
  }

  rev() {
    this.setState({ counter: this.state.counter - 1 });
  }
  handleInput(e) {
    console.log(e.target.value);
    this.setState({ counter: this.state.counter + parseInt(e.target.value) });
  }
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <input type="number" onChange={(e) => this.handleInput(e)} />
        <button onClick={(e) => this.plus(e)}>+</button>
        <button onClick={(e) => this.rev(e)}>-</button>
      </>
    );
  }
}

export default NewApp;

// import React from "react";

// class NewApp extends React.Component {
//   constructor() {
//     super();
//     this.state = { login: false };
//   }
//   render() {
//     // return <h1>asd</h1>;
//     if (this.state.login === true) {
//       return <h1>login</h1>;
//     } else {
//       return <h1>logout</h1>;
//     }
//   }
// }
// export default NewApp;
