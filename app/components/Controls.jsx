var React = require('react');

var Controls = React.createClass({
  PropTypes: {
      countdownStatus: React.PropTypes.string.isRequired,
      onStatusChange: React.PropTypes.func.isRequired,
      timerStatus: React.PropTypes.string.isRequired
    },
    onStatusChange: function(newStatus) {
      return () => {
        this.props.onStatusChange(newStatus);
      }
    },
  render: function () {
    var {countdownStatus, timerStatus} = this.props;
    
    var renderStartStopButton = () => {
      if (countdownStatus === 'started' || timerStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countdownStatus === 'paused' || timerStatus === 'paused' || timerStatus === 'stopped') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    }

    return (
      <div>
        <div className="controls">
          {renderStartStopButton()}
          <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
        </div>
      </div>
    )
  }
});

module.exports = Controls;