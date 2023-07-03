"use client";
import React from "react";
import { useEffect } from "react";
import "./globals.css";
import "./sass/main.css";
import "./sass/main.min.css";
import ElevatedSection from "./components/elevated";
import BenefitsSection from "./components/benefits";
import FAQSection from "./components/faq";
import SwiperSection from "./components/swiper";
import CountdownSection from "./components/countdown";
import HeroSection from "./components/hero";

const Home = () => {
  useEffect(() => {
    // SHOW MENU
    if (typeof window !== "undefined") {
      const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

      // Menu show
      if (navToggle) {
        navToggle.addEventListener("click", () => {
          if (navMenu != null) navMenu.classList.add("show-menu");
        });
      }

      // MENU HIDDEN
      if (navClose) {
        navClose.addEventListener("click", () => {
          if (navMenu != null) navMenu.classList.remove("show-menu");
        });
      }
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
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the updated values in the HTML elements
        var day = document.getElementById("days");
        var hour = document.getElementById("hours");
        var min = document.getElementById("minutes");
        var sec = document.getElementById("seconds");
        if (day != null) day.textContent = days.toString().padStart(2, "0");
        if (hour != null) hour.textContent = hours.toString().padStart(2, "0");
        if (min != null) min.textContent = minutes.toString().padStart(2, "0");
        if (sec != null) sec.textContent = seconds.toString().padStart(2, "0");
      }, 1000);

      // ---------registration form--------------------------------

      // Get the checkboxes and textareas for skills and cultural activities
      var customSkillsCheckbox = document.getElementById("customSkills");
      var customSkillsTextarea = document.getElementById("customSkillsInput");
      var customCulturalCheckbox = document.getElementById("customCultural");
      var customCulturalTextarea = document.getElementById(
        "customCulturalInput"
      );

      // Hide the textareas initiallyif
      if (customSkillsTextarea != null)
        customSkillsTextarea.style.display = "none";
      if (customCulturalTextarea != null)
        customCulturalTextarea.style.display = "none";

      // Add event listener to the custom skills checkbox
      if (customSkillsCheckbox != null) {
        customSkillsCheckbox.addEventListener("change", function () {
          // Toggle the visibility of the textarea based on checkbox state
          if (customSkillsCheckbox != null) {
            if (customSkillsCheckbox) {
              if (customSkillsTextarea != null)
                customSkillsTextarea.style.display = "block";
            } else {
              if (customSkillsTextarea != null)
                customSkillsTextarea.style.display = "none";
            }
          }
        });
      }

      // Add event listener to the custom cultural activities checkbox
      if (customCulturalCheckbox != null)
        customCulturalCheckbox.addEventListener("change", function () {
          // Toggle the visibility of the textarea based on checkbox state
          if (customCulturalCheckbox != null)
            if (customCulturalCheckbox) {
              if (customCulturalTextarea != null)
                customCulturalTextarea.style.display = "block";
            } else {
              if (customCulturalTextarea != null)
                customCulturalTextarea.style.display = "none";
            }
        });
    }
  });
  return (
    <>
      <HeroSection />
      <ElevatedSection />
      <BenefitsSection />
      <SwiperSection />
      <CountdownSection />
      <FAQSection />
    </>
  );
};

export default Home;
