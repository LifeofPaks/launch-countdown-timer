// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minsEl = document.getElementById("mins");
// const secondsEl = document.getElementById("seconds");

// const launch = "11 nov 2023";

// function countdown() {
//   const newYearsDate = new Date(launch);
//   const currentDate = new Date();
//   const totalSeconds = (newYearsDate - currentDate) / 1000;

//   const days = Math.floor(totalSeconds / 3600 / 24);
//   const hours = Math.floor(totalSeconds / 3600) % 24;
//   const minutes = Math.floor(totalSeconds / 60) % 60;
//   const seconds = Math.floor(totalSeconds) % 60;

//   daysEl.innerHTML = formatTime(days);
//   hoursEl.innerHTML = formatTime(hours);
//   minsEl.innerHTML = formatTime(minutes);
//   secondsEl.innerHTML = formatTime(seconds);
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}`: time;
// }
// countdown();
// setInterval(countdown, 1000);

const flipCard = document.querySelector(".flipCard");

const launchDate = new Date('11 nov 2023')
let previousTimeBetweenLaunchDate 

setInterval(() => {
  const currentDate = new Date()

  const timeBetweenLaucnDate = Math.ceil((launchDate - currentDate)/ 1000)

    flipAllCards(timeBetweenLaucnDate)

  previousTimeBetweenLaunchDate = timeBetweenLaucnDate
}, 1000);

// FLIP ALL CARDS FUNCTION
function flipAllCards(time){
  const days = Math.floor(time / 3600 / 24)
  const hours = Math.floor(time / 3600 % 24)
  const minutes =Math.floor (time / 60 % 60)
  const seconds = Math.floor(time % 60)

  const daysTens = document.querySelector('[data-days-tens]')
  const daysOnes = document.querySelector('[data-days-ones]')

  const hoursTens = document.querySelector('[data-hours-tens]')
  const hoursOnes = document.querySelector('[data-hours-ones]')

  const minutesTens = document.querySelector('[data-minutes-tens]')
  const minutesOnes = document.querySelector('[data-minutes-ones]')

  const secondsTens = document.querySelector('[data-seconds-tens]')
  const secondsOnes = document.querySelector('[data-seconds-ones]')

  flip(daysTens, Math.floor(days/10))
  flip(daysOnes, Math.floor(days%10))
  flip(hoursTens, Math.floor(hours/10))
  flip(hoursOnes, Math.floor(hours%10))
  flip(minutesTens, Math.floor(minutes/10))
  flip(minutesOnes, Math.floor(minutes%10))
  flip(secondsTens, Math.floor(seconds/10))
  flip(secondsOnes, Math.floor(seconds%10))

}


// FLIP CARD FUNCTION
function flip(flipCard, newNumber){
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent)

  if(newNumber === startNumber) return
  
  const bottomHalf = flipCard.querySelector(".bottom");
  
  const topFlip = document.createElement("div");
  const bottomFlip = document.createElement("div");
  
  topFlip.classList.add("topFlip");
  bottomFlip.classList.add("bottomFlip");
  
  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });

  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
};
