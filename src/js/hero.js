import { heroServices } from "./DATA";

(function addHeroServices() {
  let heroServicesSection = "";
  heroServices.forEach(
    (it) =>
      (heroServicesSection =
        heroServicesSection +
        `<li class="heroServices__item" style="background:linear-gradient(180deg,rgba(24, 50, 108, 1) 0%,rgba(24, 50, 108, 1) 12%,rgba(24, 48, 108, 0.25262605042016806) 100%), url(${it.pics}); background-size: cover; background-repeat: no-repeat;"><div class="heroServices__item-flap"></div><p class="heroServices__item-name">${it.title}</p><a class="heroServices__item-navigationlink" href="#${it.title}" aria-label="${it.title}"><img class="heroServices__item-link"src="${it.arrow}"alt="link to ${it.title}"/></a></li>`)
  );
  document.querySelector(".heroServices__list").innerHTML = heroServicesSection;
})();
