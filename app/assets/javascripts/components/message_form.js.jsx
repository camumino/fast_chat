var MessageForm = React.createClass({
  getInitialState: function(){
    return {text: ''}
  },
  setText: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onMessageSubmit({comment: this.state.text});
    this.setState({text: ''});
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} placeholder="Mensaje" onChange={this.setText} />
          <input type="submit" />
        </form>
      </div>
    );
  }
});
