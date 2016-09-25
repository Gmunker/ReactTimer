var React = require('react');

var Clock = React.createClass({
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },
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

module.exports = Clock;