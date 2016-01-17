import React from 'react';
import MultiInput from './multi_input';
export default React.createClass({
  getInitialState: function () {
    return {
      boxCount: 4
    };
  },

  setBoxCount: function(e) {
    this.setState({ boxCount: e.target.value });
  },

  render: function () {
    return (<div>
      <input type="number"
             value={this.state.boxCount}
             onChange={this.setBoxCount} />

      <MultiInput boxCount={this.state.boxCount} />
    </div>)
  }
});








