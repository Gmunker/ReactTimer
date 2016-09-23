var React = require('react');

var CountdownForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
  },
  render: function () {
    return (
      <div>
        <form>
          <input
            className="expand"
            type="text"
            placeholder="Enter time in seconds"
            ref="countdown-input"/>
          <button type="submit" onSubmit={this.handleSubmit}>Countdown</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;