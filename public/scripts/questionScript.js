const questionForm = document.querySelector('.form');
const questionResult = document.querySelector('.question__result');

if (questionForm) {
  questionForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { id } = event.target;

    const res = await fetch('themesApi.route.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: id.value,
      },
    });
    const data = await res.json();

    if (data.message === 'Правильно') {
      questionResult.innerHTML = data.message;
    } else {
      questionResult.innerHTML = data.message;
    }
  });
}
