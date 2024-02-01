const React = require('react');

function ScoreBar({ user }) {
  return (
    <div className="score">
      <p className="score__name score__text">{user.name}</p>
      <p className="score__int score__text" />
    </div>
  );
}

module.exports = ScoreBar;
