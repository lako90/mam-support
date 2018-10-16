import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Winds from '../Winds';
import FlexTurns from '../FlexTurns';
import AtWar from '../AtWar';

const styles = ({ spacing, palette }) => ({
  root: {
    backgroundColor: '#A9494A',
    height: '100vh',
    padding: spacing.unit * 2.5,
  },
  main: {
    marginTop: spacing.unit * 2.5,
  },
  paper: {
    height: spacing.unit * 15,
    padding: spacing.unit * 2,
    textAlign: 'center',
    color: palette.text.secondary,
  },
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {'Merchants and Maraunders support app'}
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          <Grid
            container
            spacing={16}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            <Grid item xs={6} md={4}>
              <Paper className={classes.paper}><Winds /></Paper>
            </Grid>
            <Grid item xs={6} md={4}>
              <Paper className={classes.paper}><FlexTurns /></Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}><AtWar /></Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
