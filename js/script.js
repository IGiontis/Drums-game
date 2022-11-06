"use strict";

const btnStart = document.querySelector(".btn-start");
const btnInfo = document.querySelector(".btn-info");
const info = document.querySelector(".info");
const boxContainer = document.querySelector(".box-container");
const allBoxes = document.querySelectorAll(".box");

// BOXes
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");

// Sounds

// Working start / info buttons
const startGame = function () {
  btnStart.addEventListener("click", function (e) {
    e.preventDefault();
    boxContainer.classList.remove("hidden");
    keyPress();
  });
};

const infoButton = function () {
  btnInfo.addEventListener("click", function (e) {
    e.preventDefault();
    info.classList.toggle("hidden");
  });
};

//Working on boxes and buttons

const keyPress = function () {
  window.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
      box1MassUp();
    }
    if (e.key === "w" || e.key === "W") {
      box2MassUp();
    }
    if (e.key === "s" || e.key === "S") {
      box3MassUp();
    }
    if (e.key === "d" || e.key === "D") {
      box4MassUp();
    }
    if (e.key === "z" || e.key === "Z") {
      box5MassUp();
    }
  });
};

const clickPressed = function () {
  allBoxes.forEach((value) => {
    value.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.dataset.item === "A") box1MassUp();
      if (e.target.dataset.item === "W") box2MassUp();
      if (e.target.dataset.item === "S") box3MassUp();
      if (e.target.dataset.item === "D") box4MassUp();
      if (e.target.dataset.item === "Z") box5MassUp();
    });
  });
};

// Functions for pressing key down

const box1MassUp = function () {
  const sound1 = new Audio("./sounds/tom-1.mp3");
  box1.classList.add("pressed");
  box1.style.transform = "translatey(-2rem)";

  sound1.play();
  setInterval(() => {
    box1.classList.remove("pressed");
    box1.style.transform = "translatey(0)";
  }, 900);
};

const box2MassUp = function () {
  const sound2 = new Audio("./sounds/tom-2.mp3");
  box2.classList.add("pressed");
  box2.style.transform = "translatey(-2rem)";

  sound2.play();
  setInterval(() => {
    box2.classList.remove("pressed");
    box2.style.transform = "translatey(0)";
  }, 900);
};

const box3MassUp = function () {
  const sound3 = new Audio("./sounds/tom-3.mp3");
  box3.classList.add("pressed");
  box3.style.transform = "translatey(-2rem)";

  sound3.play();
  setInterval(() => {
    box3.classList.remove("pressed");
    box3.style.transform = "translatey(0)";
  }, 900);
};

const box4MassUp = function () {
  const sound4 = new Audio("./sounds/crash.mp3");
  box4.classList.add("pressed");
  box4.style.transform = "translatey(-2rem)";

  sound4.play();
  setInterval(() => {
    box4.classList.remove("pressed");
    box4.style.transform = "translatey(0)";
  }, 900);
};

const box5MassUp = function () {
  const sound5 = new Audio("./sounds/snare.mp3");
  box5.classList.add("pressed");
  box5.style.transform = "translatey(-2rem)";

  sound5.play();
  setInterval(() => {
    box5.classList.remove("pressed");
    box5.style.transform = "translatey(0)";
  }, 900);
};

// Media query for letters
const queryMobile = function () {
  let mobileLetterHide = window.matchMedia("(max-width: 600px)");

  if (mobileLetterHide.matches) {
    allBoxes.forEach((value) => {
      value.innerHTML = "";
    });
  } else {
    allBoxes.forEach((value, i) => {
      if (i == 0) value.innerHTML = "A";
      if (i == 1) value.innerHTML = "W";
      if (i == 2) value.innerHTML = "S";
      if (i == 3) value.innerHTML = "D";
      if (i == 4) value.innerHTML = "Z";
    });
  }
};
window.addEventListener("resize", queryMobile, false);
queryMobile();
// end of query
clickPressed();
infoButton();
startGame();
