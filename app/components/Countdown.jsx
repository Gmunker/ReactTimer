var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Countdown Component</h1>
        <Clock/>
        <CountdownForm/>
      </div>
    )
  }
});

module.exports = Countdown;