var React = require('react');

var TimerControls = React.createClass({
  render: function () {
    return (
      <div className="row">
        <button className="button expand">Start</button>
        <button className="button expand">Clear</button>
      </div>
    )
  }
});

module.exports = TimerControls;