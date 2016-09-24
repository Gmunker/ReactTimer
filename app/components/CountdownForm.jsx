var React = require('react');

var CountdownForm = React.createClass({
  
  handleSubmit: function (e) {
    e.preventDefault();
    var time = this.refs.countdownInput.value;
    alert(time);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input  
          className="expand"
            type="text"
            placeholder="Enter time in seconds"
            ref="countdownInput"/>
          <button className="text-center expanded hollow button" type="submit">Countdown</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;

