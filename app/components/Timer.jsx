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
        <div>
          <div>
            <Controls/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Timer;