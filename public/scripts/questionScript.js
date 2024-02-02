const questionForm = document.querySelector('.question');
const scoreP = document.querySelector('.score__int');

if (questionForm) {
  questionForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { uniqueradio } = event.target;
    const id = uniqueradio.value;

    const res = await fetch('/api/themes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await res.json();
    scoreP.innerHTML = data.scoreToRender;
    if (data.message === 'Правильно') {
      const questionResult = document.querySelector('.question__result');
      questionResult.innerHTML = data.message;
      const buttonCheck = document.querySelector('.question__button');
      buttonCheck.setAttribute('disabled', '');
    } else {
      const questionResult = document.querySelector('.question__result');
      questionResult.innerHTML = data.message;
    }
  });
}
