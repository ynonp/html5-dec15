import React from 'react';
import Selector from './selector';

export default React.createClass({
  render: function () {
    return (<div>
      <Selector>
        <p name="cool game">one</p>
        <p name="t1">two</p>
        <p name="textbox">three</p>
      </Selector>
    </div>)
  }
});


