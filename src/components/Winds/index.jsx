import React, { Component } from 'react';
import random from 'lodash/random';

import Button from '../Button';

const winds = [
  'N',
  'NE',
  'E',
  'SE',
  'S',
  'SW',
  'W',
  'NW',
];

class Winds extends Component {
  constructor() {
    super();

    this.state = { wind: false };
  }

  handleClick = () => {
    this.setState({ wind: winds[random(winds.length)] });
  }

  render() {
    const { wind } = this.state;

    return (
      <Button onClick={this.handleClick}>
        {wind || <span><i>{'Winds'}</i></span>}
      </Button>
    );
  }
}

export default Winds;
