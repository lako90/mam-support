import React, { Component } from 'react';
import shuffle from 'lodash/shuffle';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

import Button from '../Button';
import Square from '../Square';

const tone = 500;

const staticColors = [
  yellow[tone],
  green[tone],
  blue[tone],
  red[tone],
];

class FlexTurns extends Component {
  constructor() {
    super();

    this.state = { colors: false };
  }

  handleClick = () => {
    this.setState({ colors: shuffle(staticColors) });
  }

  render() {
    const { colors } = this.state;

    return (
      <Button onClick={this.handleClick}>
        {
          colors
            ? colors.map(color => <Square key={color} color={color} />)
            : <span><i>{'Flex turns'}</i></span>
        }
      </Button>
    );
  }
}

export default FlexTurns;
