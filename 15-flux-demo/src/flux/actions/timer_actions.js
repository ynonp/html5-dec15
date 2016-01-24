import _ from 'underscore';

import Dispatcher from '../dispatcher';
import symbols from '../symbols';

const actions = {
  shuffle: shuffle,
};

function shuffle() {
  Dispatcher.dispatch({
    type: symbols.GAME_SHUFFLE
  });
}


export default actions;











