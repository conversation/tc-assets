import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.css";

const Spinner = ({ enabled, title }) => {
  if (enabled) {
    return <span className={styles.spinner} title={title} />;
  }
  return null;
};

Spinner.defaultProps = {
  enabled: true,
  title: "Loading",
};

Spinner.propTypes = {
  enabled: PropTypes.bool,
  title: PropTypes.string,
};

export default Spinner;
