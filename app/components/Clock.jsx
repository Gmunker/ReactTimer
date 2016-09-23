var React = require('react');

var TimerClock = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="clock-background text-center">
            <p id="clock-display">00:00</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TimerClock;

