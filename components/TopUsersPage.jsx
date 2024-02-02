const React = require('react');
const Layout = require('./Layout');

module.exports = function TopUsersPage({
  title, topUsers, user,
}) {
  return (
    <Layout title={title} user={user}>
      <div className="table">
        <p className="table__title">TOP USERS</p>
        {topUsers.map((el, index) => (
          <div className="table__row">
            <p className="table__ceil">{index}</p>
            <p className="table__ceil">{el.name}</p>
            <p className="table__ceil">{el.nickname}</p>
            <p className="table__ceil">{el.score}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};
