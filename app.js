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
$(document).ready(function () {
  $("#carouselExampleIndicators").carousel();
}); // Initialize the carousel
$(document).ready(function () {
  $("#carouselExampleIndicators").carousel();
});

// -------UPCOMMING EVENT TIMER------------
// Set the date and time of the upcoming event
const eventDate = new Date("2023-06-17T00:00:00Z").getTime();

// Update the countdown every second
setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = eventDate - now;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the updated values in the HTML elements
  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}, 1000);

// ---------registration form--------------------------------
function toggleOtherMajor(value) {
  const otherMajorContainer = document.getElementById("otherMajorContainer");
  if (value === "Others") {
    otherMajorContainer.style.display = "block";
  } else {
    otherMajorContainer.style.display = "none";
  }
}

// Get the checkboxes and textareas for skills and cultural activities
var customSkillsCheckbox = document.getElementById("customSkills");
var customSkillsTextarea = document.getElementById("customSkillsInput");
var customCulturalCheckbox = document.getElementById("customCultural");
var customCulturalTextarea = document.getElementById("customCulturalInput");

// Hide the textareas initially
customSkillsTextarea.style.display = "none";
customCulturalTextarea.style.display = "none";

// Add event listener to the custom skills checkbox
customSkillsCheckbox.addEventListener("change", function () {
  // Toggle the visibility of the textarea based on checkbox state
  if (customSkillsCheckbox.checked) {
    customSkillsTextarea.style.display = "block";
  } else {
    customSkillsTextarea.style.display = "none";
  }
});

// Add event listener to the custom cultural activities checkbox
customCulturalCheckbox.addEventListener("change", function () {
  // Toggle the visibility of the textarea based on checkbox state
  if (customCulturalCheckbox.checked) {
    customCulturalTextarea.style.display = "block";
  } else {
    customCulturalTextarea.style.display = "none";
  }
});
