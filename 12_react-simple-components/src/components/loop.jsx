import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    n: React.PropTypes.number
  },

  renderItem: function(item) {
    return <p>{item}</p>;
  },

  render: function() {
    return <div>
      {_.range(this.props.n).map(this.renderItem)}
    </div>
  }
});










