import React from 'react';
import ReactDOM from 'react-dom';

import GameStore from '../flux/stores/game';
import GameActions from '../flux/actions/game';
import _ from 'underscore';

export default React.createClass({
  // React Hook
  getInitialState: function() {
    return this.stateFromStore(GameStore);
  },

  // React Hook
  componentDidMount: function() {
    GameStore.subscribe(this.handleStoreChange);
  },

  // React Hook
  componentWillUnmount: function() {
    GameStore.unsubscribe(this.handleStoreChange);
  },

  handleStoreChange: function() {
    this.setState(this.stateFromStore(GameStore));
  },

  stateFromStore: function(store) {
    return {
      winner: store.redIndex,
      squares: store.squares,
    };
  },

  play: function(index) {
    GameActions.play(index);
  },

  renderItem: function(index) {
    if ( index === this.state.winner ) {
      return (<div className="square winner"
                   onClick={this.play.bind(this,index)}>
      </div>);
    } else {
      return <div className="square"></div>
    }
  },

  // React Hook
  render: function() {
    var items = this.state.squares;

    return (<div>
      {items.map(this.renderItem)}
    </div>);
  }
});


