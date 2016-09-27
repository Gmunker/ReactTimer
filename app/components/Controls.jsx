var React = require('react');

var TimerControls = React.createClass({
  PropTypes: function() {
      countdownStatus: React.PropTypes.string.isRequired
    },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    }
    return (
      <div>
        <div className="controls">
          {renderStartStopButton()}
          <button className="button alert hollow">Clear</button>
        </div>
      </div>
    )
  }
});

module.exports = TimerControls;