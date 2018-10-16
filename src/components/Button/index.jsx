import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    fontSize: '2em',
  },
};

class Button extends Component {
  static propTypes = {
    block: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    classes: PropTypes.shape().isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    block: false,
    onClick: () => true,
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { block, classes, children } = this.props;

    return (
      <ButtonBase
        style={{ display: block ? 'block' : 'inline-flex' }}
        className={classes.root}
        onClick={this.handleClick}
      >
        {children}
      </ButtonBase>
    );
  }
}

export default withStyles(styles)(Button);
