import React from 'react';
import ReactDOM from 'react-dom';

import GameStore from '../flux/stores/game';
import GameActions from '../flux/actions/game';
import UserStore from '../flux/stores/user';

import _ from 'underscore';
import ScorePanel from './score_panel';

export default React.createClass({
  // React Hook
  getInitialState: function() {
    return this.stateFromStore(GameStore, UserStore);
  },

  // React Hook
  componentDidMount: function() {
    GameStore.subscribe(this.handleStoreChange);
    UserStore.subscribe(this.handleStoreChange);
  },

  // React Hook
  componentWillUnmount: function() {
    GameStore.unsubscribe(this.handleStoreChange);
    UserStore.unsubscribe(this.handleStoreChange);
  },

  handleStoreChange: function() {
    this.setState(this.stateFromStore(GameStore, UserStore));
  },

  stateFromStore: function(gameStore, userStore) {
    return {
      winner: gameStore.redIndex,
      squares: gameStore.squares,
      score: gameStore.score,
      text: userStore.text,
    };
  },

  play: function(index) {
    GameActions.play(index);
  },

  renderItem: function(index) {
    var cls = "square";
    if ( index === this.state.winner ) {
      cls += " winner";
    }

    return (<div className={cls}
                 onClick={this.play.bind(this,index)}>
    </div>);

  },

  // React Hook
  render: function() {
    var items = this.state.squares;

    return (<div>
      <p>{this.state.text}</p>
        <ScorePanel score={this.state.score} />
      {items.map(this.renderItem)}
    </div>);
  }
});


