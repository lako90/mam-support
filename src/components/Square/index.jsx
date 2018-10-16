import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Square extends Component {
  static propTypes = {
    color: Proptypes.string.isRequired,
  }

  render() {
    const { color } = this.props;

    return (
      <div
        style={{
          backgroundColor: color,
          width: 50,
          height: 50,
          margin: 2,
        }}
      />
    );
  }
}

export default Square;
