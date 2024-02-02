const React = require('react');

function ScoreBar({ user }) {
  return (
    <div className="score">
      <p className="score__name score__text">{user.name}</p>
      <p className="score__int score__text">{user.score}</p>
    </div>
  );
}

module.exports = ScoreBar;
