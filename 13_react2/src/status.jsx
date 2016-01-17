import React from 'react';

export default React.createClass({
  propTypes: {
    clicks: React.PropTypes.number.isRequired
  },
  render: function () {
    var text;
    if (this.props.clicks >= 10) {
      text = "Wow You Win!!!";
    } else {
      text = "Keep trying...";
    }
    return (<div>
      <p>{text}</p>
    </div>)
  }
});




