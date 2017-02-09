var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar">

          <h1 className="fcc-title">ReactJS Timer & Countdown</h1>
            <div className="credits">
              <h2>Designed and Created by: </h2>
              <h2>Greg Munker</h2>
              <h2>Udemy course:</h2>
              <h2><a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/questions" target="_blank">The Complete React Web App Developer Course</a></h2>
              <h2><a className="github-link" href="https://github.com/Gmunker/ReactTimer" target="_blank">(GitHub Repo)</a></h2>
              <div className="social-buttons expanded button-group">
                  <a className="button secondary" href="http://www.facebook.com/gmunker" target="_blank">Facebook</a>
                  <a className="button secondary" href="https://plus.google.com/u/0/+GregMunker" target="_blank">Google+</a>
                  <a className="button secondary" href="https://github.com/Gmunker" target="_blank">Github</a>
                  <a className="button secondary" href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank">LinkedIn</a>
                  <a className="button secondary" href="https://twitter.com/Gmunker" target="_blank">Twitter</a>
              </div>
            </div>

        </div>
      </div>
    )
  }
});

module.exports = Nav;