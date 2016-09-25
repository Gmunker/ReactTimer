var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
            <Clock totalSeconds={0}/>
        </div>
        <div className="row">
          <div className="columns large-3 large-centered">
            <Controls/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Timer;