import React from 'react';
import Selector from './selector';

export default React.createClass({
  render: function () {
    return (<div>
      <Selector>
        <TicTacToe name="cool game" />
        <ClickCounter name="clicker" />
        <p name="textbox">three</p>
      </Selector>
    </div>)
  }
});


