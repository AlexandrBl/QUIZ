const React = require('react');

function ScoreBar({ user }) {
  return (
    <div className="score">
      <p className="score__text">
        {user ? `${user}: ${user}` : false}
      </p>
    </div>
  );
}

module.exports = ScoreBar;
