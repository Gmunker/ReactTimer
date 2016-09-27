var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should be greater then zero after started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer timerStatus={'started'}/>);
    timer.handleStatusChange('started');

    setInterval(() => {
      expect(timer.state.count).toBe(timer.state.count > 0);
      expect(timer.timerStatus).toBe('started');
    }, 1001);
    done();
  });

  it('should be paused when paused is active', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer timerStatus={'started'}/>);
    timer.handleStatusChange('started');

    setInterval(() => {
      timer.handleStatusChange('paused');
      expect(timer.state.count).toBe(timer.state.count === 3);
      expect(timer.timerStatus).toBe('paused');
    }, 3001);
    done();
  });

  it('should be zero when cleared', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer timerStatus={'started'}/>);
    timer.handleStatusChange('started');

    setInterval(() => {
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(timer.state.count === 0);
      expect(timer.timerStatus).toBe('stopped');
    }, 3001);
    done();
  });

});