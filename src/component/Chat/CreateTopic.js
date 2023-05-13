import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          style={{
            width: "100%",
            padding: "10px 15px",
            border: "2px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Input;
