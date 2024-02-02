const nextButton = document.querySelector('.scroll__ahead');
const questionContainer = document.querySelector('.question');
const main = document.querySelector('.main__center-container');
let index = 0;

if (nextButton) {
  nextButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const theme = event.target.dataset.id;
    const nextQuestion = await fetch('/api/next', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        index,
        theme,
      }),
    });
    const data = await nextQuestion.json();

    if (data.message === 'ok') {
      questionContainer.remove();
      main.insertAdjacentHTML('afterbegin', data.html);
      // questionContainer.innerHTML = data.html;
    } else if (data.message === 'redirect') {
      window.location.assign('/themes');
    } else {
      questionContainer.innerHTML = '';
      questionContainer.insertAdjacentElement('beforeend', `
        <div>
        <p>${data.message}</p>
        <a href='http://localhost:3000/themes'>Вернуться к выбору темы</a>
        </div>
        `);
    }
    index += 1;
  });
}
