const countdownDisplay = document.getElementById("countdown-display");
const timerCountdownDisplay = document.getElementById(
  "timer-countdown-display",
);

function renderCountdown() {
  const christmas = 25;

  // Task:
  // - Get today's date (you only need the day).
  const currentDate = new Date();

  // - Calculate remaining days.
  const daysUntilChristmas = christmas - currentDate.getDate();

  // - Display remaining days in countdownDisplay.
  countdownDisplay.textContent = daysUntilChristmas;
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

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
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  timerCountdownDisplay.textContent = `${hours}h ${
    minutes < 10 && minutes !== 0 ? `0${minutes}` : minutes
  }m ${seconds < 10 && seconds !== 0 ? `0${seconds}` : seconds}s`;
}

renderBirthdayCountdown();

setInterval(renderBirthdayCountdown, 1000);
