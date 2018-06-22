import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onChange = props.onChange.bind(this);
    this.state = { checked: props.checked };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  onClick(event) {
    this.setState({ checked: event.target.checked });
  }

  inputId() {
    const name = this.props.name;
    const value = this.props.value;
    return [name, value].join("-");
  }

  render() {
    // Note: ES6 object spread/destructuring will trigger a `react/no-unused-prop-types` validation, making the linter
    // detect a false positive. Example: `const { checked, name, value } = { ...this.props }`
    const [checked, name, value, labelText] = [
      this.state.checked,
      this.props.name,
      this.props.value,
      this.props.labelText,
    ];

    return (
      <label htmlFor={this.inputId()} className={styles.switch}>
        {labelText}

        <input
          id={this.inputId()}
          className={styles.hidden}
          name={name}
          value={value}
          type="checkbox"
          checked={checked}
          onChange={this.onChange}
          onClick={this.onClick}
        />
        <span className={styles.toggle} />
      </label>
    );
  }
}

ToggleSwitch.defaultProps = {
  checked: false,
  onChange: () => {},
  labelText: "",
};

ToggleSwitch.propTypes = {
  labelText: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ToggleSwitch;
