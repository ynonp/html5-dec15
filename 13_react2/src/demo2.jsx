import React from 'react';

export default React.createClass({
  componentDidMount: function () {
    var el = this.refs.extText;
    $(el).rateYo();
  },

  componentWillUnmount: function () {
  },
  render: function () {
    return (<div>
      <p ref="extText"></p>
    </div>);
  }
});


