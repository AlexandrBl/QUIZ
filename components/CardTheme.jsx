const React = require('react');

function CardTheme({ theme }) {
  return (
    <div className="card-theme card">
      <img src={theme.img_path} alt="" className="card-theme_img card__img" />
      <h2 className="card-theme__title card__title">{theme.name}</h2>
      <a href={`/themes/${theme.id}/questions/game`} className="card-theme_link card__link link">Выбрать</a>
    </div>
  );
}

module.exports = CardTheme;
