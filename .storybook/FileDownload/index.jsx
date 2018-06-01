import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './styles.css';
import file from './file.svg';

function FileDownload(props) {
  return (
    <div className={styles.fileDownload}>
      <div className={styles.file}>
        <img src={file} />
        <span className={styles.fileType}>{props.fileType}</span>
      </div>
      <a href={props.file}>{props.label}</a>
    </div>
  )
};

FileDownload.defaultProps = {
  file: undefined,
  fileType: undefined,
  label: ""
};

FileDownload.propTypes = {
  file: PropTypes.string,
  fileType: PropTypes.oneOf(["SVG"]),
  label: PropTypes.string
};

export default FileDownload;

