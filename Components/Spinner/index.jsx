import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.css";

const Spinner = ({ visible, title }) => {
  if (visible) {
    return <span className={styles.spinner} title={title} />;
  }
  return null;
};

Spinner.defaultProps = {
  visible: true,
  title: "Loading",
};

Spinner.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
};

export default Spinner;
