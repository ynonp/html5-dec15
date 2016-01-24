import _ from 'underscore';

import Dispatcher from '../dispatcher';
import symbols from '../symbols';
import GameStore from '../stores/game';

const actions = {
  play: play,
  shuffle: shuffle,
};

function shuffle() {
  Dispatcher.dispatch({
    type: symbols.GAME_SHUFFLE
  });
}

function play(index) {
  if (GameStore.redIndex === index) {
    Dispatcher.dispatch({ type: symbols.ADD_SCORE, payload: 5 });
    Dispatcher.dispatch({ type: symbols.GAME_SHUFFLE });
  } else {
    Dispatcher.dispatch({ type: symbols.ADD_SCORE, payload: -2 });
  }
}


export default actions;











