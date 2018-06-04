import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import classNames from "classnames";
import styles from "./styles.css";

// A Rails style flash container, which will show a message of a certain
// type for 30 seconds
const Flash = ({ fade, message, type }) => {
  if (message) {
    // If device width is <= 599, `small` will be true
    const classes = small => classNames(
      styles.flash,
      styles[type],
      { [styles.small]: small },
      { [styles.fade]: fade },
    );
    const flash = small => (<p className={classes(small)}>{message}</p>);
    return (<MediaQuery component="div" maxDeviceWidth={599}>{flash}</MediaQuery>);
  }
  return null;
};

Flash.defaultProps = {
  fade: false,
  message: "",
  type: undefined,
};

Flash.propTypes = {
  fade: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.oneOf(["notice", "warning", "alert"]),
};

export default Flash;
