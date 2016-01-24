import Store from '../store';
import Dispatcher from '../dispatcher';


import symbols from '../symbols';
import _ from 'underscore';
const squares = 5;

const GameStore = Object.assign({}, Store, {
  redIndex: _.random(squares-1),
  squares: _.range(squares),
  score: 0,

  shuffle: function() {
    this.redIndex = _.random(squares-1);
    this.trigger();
  },

  addScore: function(delta) {
    this.score += delta;
    this.trigger();
  }
});

GameStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.type) {
    // handle incoming events and modify store data
    case symbols.GAME_SHUFFLE:
      // Dispatcher.waitFor(UserStore.dispatchToken);
      GameStore.shuffle();
      break;

    case symbols.ADD_SCORE:
      GameStore.addScore(action.payload);
      break;
  }

});

export default GameStore;

