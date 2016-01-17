import React from 'react';
import Status from './status';
import Counter from './counter';

export default React.createClass({
  propTypes: {},
  getInitialState: function () {
    return { clicks: 0 };
  },

  handleClick: function(e) {
    this.setState({ clicks: this.state.clicks + 2});
  },

  render: function () {
    return (<div>
      <p>You clicked {this.state.clicks} times</p>
      <Status clicks={this.state.clicks} />
      <Counter clicks={this.state.clicks}
               myOnClick={this.handleClick} />
    </div>)
  }
});












