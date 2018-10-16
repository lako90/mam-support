import React, { Component } from 'react';

import shuffle from 'lodash/shuffle';
import drop from 'lodash/drop';

import Button from '../Button';

const staticNavies = [
  'Dutch',
  'French',
  'English',
  'Spanish',
];

class AtWar extends Component {
  constructor() {
    super();

    this.state = { navies: false };
  }

  handleClick = () => {
    const { navies } = this.state;

    this.setState({
      navies: (Array.isArray(navies)) ? 'Peace' : drop(shuffle(staticNavies), staticNavies.length - 2),
    });
  }

  renderNavies = navies => (
    Array.isArray(navies)
      ? navies.map(navy => <div key={navy}>{navy}</div>)
      : navies
  )

  render() {
    const { navies } = this.state;

    return (
      <Button block onClick={this.handleClick}>
        {
          navies
            ? this.renderNavies(navies)
            : <span><i>{'At War!!'}</i></span>
        }
      </Button>
    );
  }
}

export default AtWar;
