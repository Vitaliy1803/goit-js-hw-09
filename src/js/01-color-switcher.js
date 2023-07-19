const bodyChangeColor = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  let intervalId = null;

  btnStop.setAttribute('disabled', '');

  btnStart.addEventListener('click', el => {
    el.target.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');

    intervalId = setInterval(() => {
        bodyChangeColor.style.backgroundColor = getRandomHexColor();}, 1000);
        console.log('start');
    });

    btnStop.addEventListener('click', el => {
        el.target.setAttribute('disabled', true);
        btnStart.removeAttribute('disabled');

        clearInterval(intervalId);
        console.log('stop');
    });

