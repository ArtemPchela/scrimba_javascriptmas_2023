const countdownDisplay = document.getElementById("countdown-display");
const timerCountdownDisplay = document.getElementById(
  "timer-countdown-display",
);
const birthdayCountdownDisplay = document.getElementById(
  "birthday-countdown-display",
);
const christmasCountdownDisplay = document.getElementById(
  "christmas-countdown-display",
);

function calculateTimeDifference(timeDifference) {
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function renderCountdown() {
  const christmas = 25;
  const currentDate = new Date();
  countdownDisplay.textContent = christmas - currentDate.getDate();

  const timeDifference =
    new Date(currentDate.getFullYear(), 11, christmas) - currentDate;
  const { hours, minutes, seconds } = calculateTimeDifference(timeDifference);
  christmasCountdownDisplay.textContent = `${hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function renderBirthdayCountdown() {
  const birthdayMonth = 9;
  const birthdayDay = 13;
  const currentDate = new Date();
  const nextBirthdayDate = new Date(
    currentDate.getFullYear(),
    birthdayMonth - 1,
    birthdayDay,
  );

  if (nextBirthdayDate < currentDate) {
    nextBirthdayDate.setFullYear(currentDate.getFullYear() + 1);
  }

  const timeDifference = nextBirthdayDate - currentDate;
  const { days, hours, minutes, seconds } =
    calculateTimeDifference(timeDifference);
  birthdayCountdownDisplay.textContent = days;
  timerCountdownDisplay.textContent = `${hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

renderCountdown();
setInterval(renderCountdown, 1000);

renderBirthdayCountdown();
setInterval(renderBirthdayCountdown, 1000);
