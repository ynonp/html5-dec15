import _ from 'underscore';

import Dispatcher from '../dispatcher';
import symbols from '../symbols';

const actions = {
  setText,
  setRandomNumber
};

function setRandomNumber() {
  const text = "And the winner is: ... " + _.random(100);
  Dispatcher.dispatch({
    type: symbols.SET_HELLO_TEXT,
    payload: text });
}

function setText(text) {
  Dispatcher.dispatch({ type: symbols.SET_HELLO_TEXT, payload: text });
}

function setTextLater(text) {
  setTimeout(function() {
    Dispatcher.dispatch({ type: symbols.SET_HELLO_TEXT, payload: text });
  }, 1000);
}

export default actions;
