const React = require('react');

function ScoreBar({ user }) {
  return (
    <div className="score">
      <p className="score__name score__text">
        Игрок:
        {user.name}
      </p>
      <p className="score__int score__text">
        {' '}
        { user.score ? '' : `Счет: ${user.score}` }
      </p>
    </div>
  );
}

module.exports = ScoreBar;
