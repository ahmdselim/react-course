import React from "react";

function FancyBorder(props) {
  console.log(props);
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}
function WelcomeDialog2() {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      // <form>
      //   <label>
      //     {/* Is going: */}
      //     {this.state.isGoing ? "isGoing Checked: " : "isGoing Not Checked"}
      //     <br />

      //     <input
      //       name="isGoing"
      //       type="checkbox"
      //       checked={this.state.isGoing}
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Number of guests: {this.state.numberOfGuests}
      //     <br />
      //     <input
      //       name="numberOfGuests"
      //       type="number"
      //       value={this.state.numberOfGuests}
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      // </form>

      <>
        <WelcomeDialog />
        <WelcomeDialog2 />
      </>
    );
  }
}
