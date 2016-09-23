var React = require('react');

var TimerControls = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <button className="button control-buttons">Start</button>
          <button className="button control-buttons">Clear</button>
        </div>
      </div>
    )
  }
});

module.exports = TimerControls;