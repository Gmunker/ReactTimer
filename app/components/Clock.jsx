var React = require('react');

var TimerClock = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="clock-background text-center"></div>
        </div>
      </div>
    )
  }
});

module.exports = TimerClock;