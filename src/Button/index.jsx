import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.css";

// Can either be an anchor tag (if `href` is present), or an HTML button, but is
// always styled to look like a button. `onClick` governs its behaviour (if
// present). `position`, `size` and `type` govern its appearance (see the app's
// Storybook for examples).
const Button = ({ children, disabled, href, onClick, position, size, type }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  const classes = classNames(
    styles.button,
    { [styles.left]: position === "left" },
    { [styles.right]: position === "right" },
    { [styles.large]: size === "large" },
    { [styles.danger]: type === "danger" },
    { [styles.primary]: type === "primary" },
  );
  if (href) {
    return (
      <a className={classes} disabled={disabled} href={href} onClick={handleClick}>{children}</a>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={handleClick}>{children}</button>
  );
};

Button.defaultProps = {
  children: undefined,
  disabled: false,
  href: undefined,
  onClick: undefined,
  position: "",
  size: undefined,
  type: undefined,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.oneOf(["", "left", "right"]),
  size: PropTypes.oneOf(["large"]),
  type: PropTypes.oneOf(["danger", "primary"]),
};

export default Button;
