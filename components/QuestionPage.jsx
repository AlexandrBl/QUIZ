const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

module.exports = function QuestionPage({ title, question, answers }) {
  return (
    <Layout title={title}>
      <QuestionCard question={question} answers={answers} />
    </Layout>
  );
};
