var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
        <h1 className="text-center">Countdown Component</h1>
      </div>
      <div className="row">
        <div className="columns large-3 large-centered">
          <Clock totalSeconds={0}/>
        </div>
      </div>
      <div className="row">
        <div className="columns large-3 large-centered">
          <CountdownForm/>
        </div>
      </div>
      </div>
    )
  }
});

module.exports = Countdown;