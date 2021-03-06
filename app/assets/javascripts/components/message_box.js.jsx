var MessageBox = React.createClass({
  getInitialState: function() {
    return {messages: []};
  },
  loadMessagesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({messages: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleSubmit: function(comment) {
    var messages = this.state.messages
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    var newMessages = messages.concat([comment]);
    this.setState({messages: newMessages});
    
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      method: "POST",
      data: {message: comment},
      success: function(data) {
        console.log("ok");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadMessagesFromServer();
    setInterval(this.loadMessagesFromServer, this.props.pollInterval * 1000);
  },
  render: function() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSubmit={this.handleSubmit} />
      </div>
    );
  }
});
