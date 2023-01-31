const baseBackColors = document.querySelector(".baseBackColors");
const analogOne = document.querySelector(".analogOne");
const digitalOne = document.querySelector(".digitalOne");

baseBackColors.addEventListener("click", (e) => {
  const value = Array.from(e.target.classList);

  if (value.includes("button1")) {
    analogOne.classList.add("entreRelogios");
    digitalOne.classList.remove("entreRelogios");
  }

  if (value.includes("button2")) {
    digitalOne.classList.add("entreRelogios");
    analogOne.classList.remove("entreRelogios");
  }
});

const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);

const horasDcontainer = document.querySelector(".horasD-container");

const upDateClock = () => {
  const present = new Date();

  const hours = present.getHours();
  const minutes = present.getMinutes();
  const seconds = present.getSeconds();

  const clockHTML = `
<span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
<span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
<span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
`;
  horasDcontainer.innerHTML = clockHTML;
};

setInterval(upDateClock, 1000);
