import { about } from "./DATA";
import { aboutHistory } from "./DATA";

(function addAbout() {
  let aboutInfo = "";
  about.forEach(
    (it) =>
      (aboutInfo =
        aboutInfo +
        `<li class="about__item"><p class="about__item-name">${it.title}</p><p class="about__item-description">${it.description}</p></li>`)
  );
  document.querySelector(".about__list").innerHTML = aboutInfo;
})();

(function addAboutHistory() {
  let aboutInfo = "";
  aboutHistory.forEach(
    (it) =>
      (aboutInfo =
        aboutInfo +
        `<li class="about__listOfHistory-item"><img class="about__listOfHistory-img" src="${it.pic}" alt="${it.alt}"/><p class="about__listOfHistory-text ${it.alt}">${it.title}</p></li>`)
  );
  document.querySelector(".about__listOfHistory").innerHTML = aboutInfo;
})();

// play|stop video
const videoContainer = document.querySelectorAll("#about__video")[0];
window.addEventListener("scroll", function elementIsVisibleInViewport() {
  const { top, bottom } = videoContainer.getBoundingClientRect();
  const { innerHeight } = window;
  if ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) {
    videoContainer.play();
  } else {
    videoContainer.pause();
  }
});
const soundButton = document.querySelectorAll(".sound-button")[0];
soundButton.addEventListener("click", function () {
  videoContainer.muted = !videoContainer.muted;
});
