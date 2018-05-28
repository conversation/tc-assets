import React, { Component } from 'react';
import styles from './styles.css';

class Swatch extends Component {
  render() {
    return (
      <div className={styles.swatch}>
        <div className={styles.swatchColour} style={{backgroundColor: this.props.hex}}></div>
        <dl>
          <dt>Hex</dt>
          <dd>{this.props.hex}</dd>

          <dt>Name</dt>
          <dd>{this.props.name}</dd>
        </dl>
      </div>
    );
  }
}

export default Swatch;

