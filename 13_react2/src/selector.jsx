import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    children:  React.PropTypes.node
  },
  getInitialState: function() {
    return { selected: 0 };
  },
  selectItem: function(e) {
    this.setState({selected: Number(e.target.value) });
  },

  render: function () {
    var children = React.Children.toArray(this.props.children);

    return (<div>
      <select value={this.state.selected} onChange={this.selectItem}>
        {_.range(children.length).map((index) => (
          <option key={index} value={index}>{index}</option>
        ))}
      </select>

      {children[this.state.selected]}
    </div>)
  }
});











