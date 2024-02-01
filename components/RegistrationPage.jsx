const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <div className="registration">

        <div className="main__left">
          <h1 className="registration__title title">Зарегайся</h1>
        </div>
        <div className="main__right">
          <RegForm />
        </div>
      </div>
    </Layout>
  );
}

module.exports = RegistrationPage;
