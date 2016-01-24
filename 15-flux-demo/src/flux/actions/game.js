import _ from 'underscore';

import Dispatcher from '../dispatcher';
import symbols from '../symbols';
import GameStore from '../stores/game';

const actions = {
  play: play
};

function play(index) {
  if (GameStore.redIndex === index) {
    Dispatcher.dispatch({ type: symbols.GAME_SHUFFLE });
  }
}


export default actions;
