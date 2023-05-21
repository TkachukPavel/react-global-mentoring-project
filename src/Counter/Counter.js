import { createElement, Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initValue,
    };
  }

  incrementValue() {
    const { value } = this.state;
    this.setState({
      ...this.state,
      value: value + 1,
    });
  }

  decrementValue() {
    const { value } = this.state;

    this.setState({
      ...this.state,
      value: value - 1,
    });
  }

  render() {
    return createElement(
      "div",
      { className: "p-3" },
      createElement(
        "button",
        {
          className: "btn btn-light",
          onClick: () => this.decrementValue(),
        },
        "-"
      ),
      createElement("span", { className: "px-3" }, this.state.value),
      createElement(
        "button",
        {
          className: "btn btn-light",
          onClick: () => this.incrementValue(),
        },
        "+"
      )
    );
  }
}
