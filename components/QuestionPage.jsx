const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

module.exports = function QuestionPage({ title, question, answers }) {
  return (
    <Layout title={title}>
      <QuestionCard question={question} answers={answers} />
      <div className="scroll">
          <button type="button" className="scroll__back button">Назад</button>
          <button type="button" data-id={question.theme_id} className="scroll__ahead button">Вперед</button>
        </div>
    </Layout>
  );
};
