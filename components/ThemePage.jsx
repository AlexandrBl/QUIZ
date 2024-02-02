const React = require('react');
const Layout = require('./Layout');
const CardTheme = require('./CardTheme');

function ThemePage({ theme, title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <div className="main__left">
          <h1 className="choise__title title">Выбери тему</h1>
        </div>
        <div className="main__right main__right_column">
          {theme.map((el) => <CardTheme theme={el} />)}
        </div>
      </div>
    </Layout>
  );
}

module.exports = ThemePage;
