document.addEventListener('DOMContentLoaded', clock);

function clock() {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  console.log(secondHand);

  const setDate = function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const sixtyToDegrees = num => ((num * 6) + 90);
    const secondsDegrees = sixtyToDegrees(seconds);
    const minutesDegrees = sixtyToDegrees(minutes);
    const hoursDegrees = sixtyToDegrees((hours % 12) * 5);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  };

  setInterval(setDate, 1000);
}
