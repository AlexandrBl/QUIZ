const questionForm = document.querySelector('.question');
const questionResult = document.querySelector('.question__result');

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

    if (data.message === 'Правильно') {
      questionResult.innerHTML = data.message;
    } else {
      questionResult.innerHTML = data.message;
    }
  });
}
