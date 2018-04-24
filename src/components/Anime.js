import React, { Component } from 'react';
import Tokyoghoul from './Tokyoghoul';
import Steinsgate from './Steinsgate';
import Myhero from './Myhero';
import Deadlysins from './Deadlysins';

class Anime extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container">
        <div class="series-container">
          <Tokyoghoul />
        </div>
        <div class="series-container">
          <Steinsgate />
        </div>
        <div class="series-container">
          <Myhero />
        </div>
        <div class="series-container">
          <Deadlysins />
        </div>
      </div>
    )
  }
}

export default Anime;
