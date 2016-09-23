var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Timer Component</h1>
        <div className="columns" id="timer-clock">
          <Clock/>
        </div>
        <div className="columns" id="timer-controls">
          <Controls/>
        </div>

      </div>
    )
  }
});

module.exports = Timer;