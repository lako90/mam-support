import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    fontSize: '2em',
  },
};

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
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  }

  constructor() {
    super();

    this.state = { wind: false };
  }

  handleClick = () => {
    this.setState({ wind: winds[Math.floor(Math.random() * winds.length)] });
  }

  render() {
    const { classes } = this.props;
    const { wind } = this.state;

    return (
      <Button
        className={classes.root}
        onClick={this.handleClick}
      >
        {wind || <span><i>{'Winds'}</i></span>}
      </Button>
    );
  }
}

export default withStyles(styles)(Winds);
