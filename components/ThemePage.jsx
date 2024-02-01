const React = require('react');
const Layout = require('./Layout');
const CardTheme = require('./CardTheme');

function ThemePage({ theme, title }) {
  return (
    <Layout title={title}>
      <div className="main__left">
        <h1 className="choise__title title">Выбери тему</h1>
      </div>
      <div className="main__right">
        {theme.map((el) => <CardTheme theme={el} />)}
      </div>
    </Layout>
  );
}

module.exports = ThemePage;
