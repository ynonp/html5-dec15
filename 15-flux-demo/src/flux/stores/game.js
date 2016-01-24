import Store from '../store';
import Dispatcher from '../dispatcher';
import symbols from '../symbols';
import _ from 'underscore';
const squares = 5;

const GameStore = Object.assign({}, Store, {
  redIndex: _.random(squares-1),
  squares: _.range(squares),

  shuffle: function() {
    this.redIndex = _.random(squares-1);
    this.trigger();
  }
});

GameStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.type) {
    // handle incoming events and modify store data
    case symbols.GAME_SHUFFLE:
      GameStore.shuffle();
      break;
  }

});

export default GameStore;

