export default {
  getInitialState: function() {
    return { count: 0 };
  },

  inc: function() {
    this.setState({count: this.state.count+1});
  }
};

