import { createElement, Component } from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initValue || 0,
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
      { className: "p-3 montserrat-font" },
      createElement(
        "button",
        {
          className: "btn btn-light",
          onClick: () => this.decrementValue(),
          "data-testid": "dec-button",
        },
        "-"
      ),
      createElement(
        "span",
        { className: "px-3", "data-testid": "val" },
        this.state.value
      ),
      createElement(
        "button",
        {
          className: "btn btn-light",
          onClick: () => this.incrementValue(),
          "data-testid": "inc-button",
        },
        "+"
      )
    );
  }
}

Counter.propTypes = {
  /**
   * Initial counter value
   */
  initValue: PropTypes.number,
};

Counter.defaultProps = {
  initValue: 0,
};
