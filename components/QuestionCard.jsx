const React = require('react');

module.exports = function QuestionCard({ question, answers }) {
  return (
    <div className="question container">
      <div className="main__left main__left_question">
        <img className="question__img" src={question.img_path} alt="picture" />
        <h2 className="question__title title">{question.question_text}</h2>
      </div>
      <div className="main__right main__right_question">
        <form className="question">
          {answers.map((el, index) => (
            <div className="question__choose">
              <input id={index} name="uniqueradio" type="radio" className="question__choose-radio" value={el.id} />
              {' '}
              <label className="question__choose-text">{el.answer_text}</label>
            </div>
          ))}
          <button type="submit" className="question__button button">Проверить ответ</button>
          <p className="question__result" />
        </form>
      </div>
    </div>
  );
};
