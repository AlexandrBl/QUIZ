const React = require('react');
const ScoreBar = require('./ScoreBar');

function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/scripts/registrationScript.js" />
        <title>{title}</title>
      </head>
      <body>

        <header className="header">
          <div className="center-container">{user ? <ScoreBar user={user} /> : false}</div>
        </header>
        <main className="main">
          <div className="center-container">{children}</div>
        </main>
        <footer className="footer">
          <div className="center-container"><div /></div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
