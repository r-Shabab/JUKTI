// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu

const navLink = document.querySelectorAll(".navbar_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Initialize the carousel
$(document).ready(function() {
  $('#carouselExampleIndicators').carousel();
});// Initialize the carousel
$(document).ready(function() {
  $('#carouselExampleIndicators').carousel();
});

// Get the target date and time (Next Sunday in this case)
const targetDate = new Date('2023-05-28T00:00:00Z');

// Function to update the countdown
function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the remaining time
  let remainingTime = targetDate - currentDate;

  if (remainingTime < 0) {
    // If the target date has passed, display all zeros
    remainingTime = 0;
  }

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown values in the HTML
  document.querySelector('.days .value').textContent = formatTime(days);
  document.querySelector('.hours .value').textContent = formatTime(hours);
  document.querySelector('.minutes .value').textContent = formatTime(minutes);
  document.querySelector('.seconds .value').textContent = formatTime(seconds);
}

// Function to format the time values (add leading zero if necessary)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update the countdown immediately
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

