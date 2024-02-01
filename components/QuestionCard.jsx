const React = require('react');

module.exports = function QuestionCard({ question, answers }) {
  return (
    <div className="question">
      <div className="main__left">
        <img src={question.img_path} alt="picture" />
        <h2 className="question__title title">{question.question_text}</h2>
      </div>
      <div className="main__right">
        <form className="question">
          {answers.map((answer) => <input type="radio" name="choose" className="question__choose" value={answer.id}>{answer.answer_text}</input>)}
          <button type="submit" className="question__button button">Проверить ответ</button>
          <p className="question__result" />
        </form>
        <div className="scroll">
          <button className="scroll__back button">Назад</button>
          <button className="scroll__ahead button">Вперед</button>
        </div>
      </div>
    </div>
  );
};
