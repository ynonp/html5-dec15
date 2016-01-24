import React from 'react';
import ReactDOM from 'react-dom';

import UserStore from '../flux/stores/user';
import UserActions from '../flux/actions/user';

export default React.createClass({
  getInitialState: function() {
    return this.stateFromStore(UserStore);
  },

  // React Hook
  componentDidMount: function() {
    UserStore.subscribe(this.handleStoreChange);
  },

  // React Hook
  componentWillUnmount: function() {
    UserStore.unsubscribe(this.handleStoreChange);
  },

  handleStoreChange: function() {
    this.setState(this.stateFromStore(UserStore));
  },

  stateFromStore: function(store) {
    return { text: store.text };
  },

  setRandomText: function() {
    UserActions.setRandomNumber();    
  },

  render: function() {
    return (<div>
      {this.state.text}
      <button onClick={this.setRandomText}>Set Random Text</button>
    </div>);
  }
});


