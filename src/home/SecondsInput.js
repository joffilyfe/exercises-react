import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { parseTimeString } from "../utils/index";
import styles from "./secondsinput.module.scss";

export default class SecondsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "00:00:00",
      mask: "99:99:99",
      maskPlaceholder: "0",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let { timeString, seconds } = parseTimeString(event.target.value);
    this.props.onChangeTime({ time: timeString, seconds: seconds });
    this.setState({ value: timeString });
  }

  render() {
    return (
      <InputMask
        {...this.state}
        id={this.props.id}
        data-testid={this.props.testId}
        onKeyUp={this.handleChange}
        onChange={this.handleChange}
        className={`${this.props.className} ${styles.timePicker}`}
      />
    );
  }
}

SecondsInput.propTypes = {
  onChangeTime: PropTypes.func.isRequired,
};