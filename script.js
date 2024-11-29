const countdownElement = document.getElementById('countdown');
const endDate = new Date('December 31, 2030 23:59:59').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    countdownElement.textContent = "Time's up!";
    return;
  }

  const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${years} Years, ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
