const React = require('react');

function RegForm() {
  return (
    <form method="POST" action="submit" className="registration__form form">
      <input className="form__input input" name="name" type="text" placeholder="Введите имя" />
      <input className="form__input input" name="nickname" type="text" placeholder="Введите nickname" />
      <button type="submit" className="form__button button">Отправить</button>
      <p className="form__error error" />
    </form>
  );
}

module.exports = RegForm;
