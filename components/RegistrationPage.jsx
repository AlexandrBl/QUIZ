const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
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

module.exports = RegistrationPage;
