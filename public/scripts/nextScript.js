const nextButton = document.querySelector('.scroll__ahead');
const mainContainer = document.querySelector('.main');

if (nextButton) {
  nextButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const { index, theme_id } = event.target.dataset;

    const nextQuestion = await fetch('/api/next', {
      method: 'POST',
      headers: {
        'Content-type': 'aplication.json',
      },
      body: JSON.stringify({
        index,
        theme_id,
      }),
    });

    const data = await nextQuestion.json();

    if (data.message === 'ok') {
      mainContainer.innerHTML = data.html;
    } else if (data.message === 'redirect') {
      window.location.assign('/themes');
    } else {
      mainContainer.innerHTML = '';
      mainContainer.insertAdjacentElement('beforeend', `
      <div>
      <p>${data.message}</p>
      <a href='http://localhost:3000/themes'>Вернуться к выбору темы</a>
      </div>
      `);
    }
  });
}
