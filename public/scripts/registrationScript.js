const regForm = document.querySelector('.registration__form');

if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, nickname } = event.target;
    const response = await fetch('/api/registration', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        nickname: nickname.value,
      }),
    });
    const data = await response.json();
    console.log(data);
    event.target.reset();
    if (data.message === 'ok') {
      window.location.assign('/themes');
    } else {
      regForm.querySelector('.form__error').innerHTML = data.message;
    }
  });
}
