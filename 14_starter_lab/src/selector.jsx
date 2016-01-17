import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    children:  React.PropTypes.node
  },
  getInitialState: function() {
    return { selected: 0 };
  },
  selectItem: function(idx) {
    this.setState({selected: idx });
  },

  render: function () {
    var children = React.Children.toArray(this.props.children);

    return (<div className="container">
      <div className="col-xs-4">
      <ul className="nav nav-pills nav-stacked">
        {_.range(children.length).map((index) => (
          <li>
          <a key={index} href="#"
            onClick={this.selectItem.bind(this, index)}>{index}</a>
          </li>

        ))}
        <li>
          <button>New</button>
        </li>
      </ul>
      </div>

      <div className="col-xs-8">
        {children[this.state.selected]}
      </div>

    </div>)
  }
});











