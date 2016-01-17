import React from 'react';

export default React.createClass({
  propTypes: {
    clicks: React.PropTypes.number.isRequired,
    myOnClick: React.PropTypes.func,
  },

  render: function () {
    return (<div>
      <button onClick={this.props.myOnClick}>Click Me</button>
    </div>)
  }
});


