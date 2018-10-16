import React, { Component } from 'react';

import shuffle from 'lodash/shuffle';
import drop from 'lodash/drop';

import Button from '../Button';

const staticMarines = [
  'French',
  'English',
  'Spanish',
  'Portuguese',
];

class AtWar extends Component {
  constructor() {
    super();

    this.state = { marines: false };
  }

  handleClick = () => {
    this.setState({ marines: drop(shuffle(staticMarines), staticMarines.length - 2) });
  }

  render() {
    const { marines } = this.state;

    return (
      <Button block onClick={this.handleClick}>
        {
          marines
            ? marines.map(marine => <div key={marine}>{marine}</div>)
            : <span><i>{'At War!!'}</i></span>
        }
      </Button>
    );
  }
}

export default AtWar;
