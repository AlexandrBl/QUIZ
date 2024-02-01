const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');

function Registration({ user, title }) {
  return (
    <Layout title="Регистарция">
      <div className="registration">

        <div className="main__left">
          <h1 className="registration__title">Зарегайся</h1>
        </div>
        <RegForm />
        <div className="main__right" />
      </div>
    </Layout>
  );
}

module.exports = Registration;
