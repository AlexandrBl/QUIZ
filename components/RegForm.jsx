const React = require('react');

function RegForm() {
  return (
    <form method="POST" action="submit" className="registration__form form">
      <input className="form__input" type="text" placeholder="Введите имя" />
      <input className="form__input input" type="text" placeholder="Введите nickname" />
      <button type="submit" className="form__button button">Отправить</button>
    </form>
  );
}

module.exports = RegForm;
