import React from "react";
import PropTypes from "prop-types";
import { throttle } from "lodash";
import styles from "./styles.css";

export default class SearchBox extends React.Component {
  static submit(e) {
    e.preventDefault();
  }

  constructor(props) {
    super(props);
    this.throttledNotify = throttle(this.notifySearchChanged, 500, { leading: false });
    this.keyup = this.keyup.bind(this);
  }

  keyup(e) {
    this.throttledNotify(e.target.value);
  }

  notifySearchChanged(search) {
    this.props.onChange(search);
  }

  render() {
    return (
      <form onSubmit={SearchBox.submit}>
        <input
          type="text"
          name="q"
          onKeyUp={this.keyup}
          placeholder={this.props.placeholder}
          className={styles.input}
        />
      </form>
    );
  }
}

SearchBox.defaultProps = {
  placeholder: "",
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
