var MessageList = React.createClass({
  render: function() {
    var commentNodes = this.props.messages.map(function(message) {
      return (
        <Message comment={message.comment} date={message.created_at} />
      );
    });

    return (
      <div>
        {commentNodes}
      </div>
    );
  }
});
