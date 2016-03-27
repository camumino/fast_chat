var Message = React.createClass({
  render: function() {
    return (
      <div>
        <p>{this.props.comment}- {this.props.date}</p>
      </div>
    );
  }
});
