import Store from '../store';
import Dispatcher from '../dispatcher';
import symbols from '../symbols';

const UsersStore = Object.assign({}, Store, {
  text: "Hello World",

  setText: function(text) {
    this.text = text;
    this.trigger();
  },
});



UsersStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.type) {    
    // handle incoming events and modify store data
  case symbols.SET_HELLO_TEXT:
    UsersStore.setText(action.payload);
    break;
  }

});

export default UsersStore;

