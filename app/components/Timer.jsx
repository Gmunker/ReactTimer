var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, PrevState) {
    if (this.state.timerStatus !== PrevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearTimeout(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
 startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-titles">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;