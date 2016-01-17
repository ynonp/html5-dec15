import React from 'react';
import CounterMixin from './counter_mixin';

export default React.createClass({
  mixins: [CounterMixin],

  render: function () {
    return (<div>
      <p>You clicked: {this.state.count} times</p>
      <button onClick={this.inc}>Click Me</button>
    </div>)
  }
});


