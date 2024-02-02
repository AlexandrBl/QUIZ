const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

module.exports = function QuestionPage({
  title, question, answers, user,
}) {
  return (
    <Layout title={title} user={user}>
      <QuestionCard question={question} answers={answers} />
      <div className="scroll">
        <button type="button" data-id={question.theme_id} className="scroll__ahead button">Далее</button>
      </div>
    </Layout>
  );
};
