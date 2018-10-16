import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    fontSize: '2em',
  },
};

class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    classes: PropTypes.shape().isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: () => true,
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { classes, children } = this.props;

    return (
      <MuiButton
        className={classes.root}
        onClick={this.handleClick}
      >
        {children}
      </MuiButton>
    );
  }
}

export default withStyles(styles)(Button);
