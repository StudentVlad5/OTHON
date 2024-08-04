import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { heroServices } from "./DATA";
import arrow from "../images/arrow.svg";

// import Swiper and modules styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation.min.css";
import "swiper/modules/pagination.min.css";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// add swiper to mobile section
(function addServicesSliders() {
  let servicesSliders = "";
  let description = "";
  heroServices.forEach(
    (it) => (
      (description = ""),
      it.description.forEach(
        (k) =>
          (description =
            description + `<p class="swiper-description--text">${k}</p>`)
      ),
      (servicesSliders =
        servicesSliders +
        `<div class="swiper-slide services"><div class="swiper-title"><p class="swiper-subtitle">${it.title}</p></div><div class="swiper-description" style="background:linear-gradient(180deg,rgba(24, 50, 108, 1) 0%,rgba(24, 50, 108, 1) 12%,rgba(24, 48, 108, 0.25262605042016806) 100%), url(${it.pics}); background-size: cover; background-position: center center;background-repeat: no-repeat">${description}</div><a class="swiper-link" href="#${it.title}" aria-label="${it.title}"><div class="btn-link"><img class="btn-link-img" src="${arrow}"alt="link to ${it.title}"/></div></a></div></div>`)
    )
  );

  document.querySelector(".swiper-wrapper").innerHTML = servicesSliders;
})();

// add services to desktop section
(function addServicesItem() {
  let servicesList = "";
  let descriptionItem = "";
  let description = "";
  let imagesItem = "";
  heroServices.forEach((it, ind) => {
    if (ind === 0) {
      servicesList =
        servicesList +
        `<li class="services__item active" data-info=${it.id}>
            <p class="services__item text">${it.title}</p>
          </li>`;
      it.description.forEach(
        (k) =>
          (descriptionItem =
            descriptionItem + `<p class="services__description--text">${k}</p>`)
      );
      description =
        description +
        `<li class="services__description--container active" data-info=${it.id}>${descriptionItem}</li>`;
      descriptionItem = "";
      imagesItem =
        imagesItem +
        `<li class="services__img--wrap active" data-info=${it.id}><div class="services__img" style="background:linear-gradient(180deg,rgba(24, 50, 108, 1) 0%,rgba(24, 50, 108, 1) 12%,rgba(24, 48, 108, 0.25262605042016806) 100%), url(${it.pics}); background-size: cover; background-position: center center;background-repeat: no-repeat"></div><a class="services__link" href="#${it.title}" aria-label="${it.title}"><div class="btn-link"><img class="btn-link-img" src="${arrow}"alt="link to ${it.title}"/></div></a></li>`;
    } else {
      servicesList =
        servicesList +
        `<li class="services__item" data-info=${it.id}><p class="services__item text">${it.title}</p></li>`;
      imagesItem =
        imagesItem +
        `<li class="services__img--wrap" data-info=${it.id}><div class="services__img" style="background:linear-gradient(180deg,rgba(24, 50, 108, 1) 0%,rgba(24, 50, 108, 1) 12%,rgba(24, 48, 108, 0.25262605042016806) 100%), url(${it.pics}); background-size: cover; background-position: center center;background-repeat: no-repeat"></div><a class="services__link" href="#${it.title}" aria-label="${it.title}"><div class="btn-link"><img class="btn-link-img" src="${arrow}"alt="link to ${it.title}"/></div></a></li>`;
      it.description.forEach(
        (k) =>
          (descriptionItem =
            descriptionItem + `<p class="services__description--text">${k}</p>`)
      );
      description =
        description +
        `<li class="services__description--container" data-info=${it.id}>${descriptionItem}</li>`;
      descriptionItem = "";
    }
  });
  document.querySelector(".services__list").innerHTML = servicesList;
  document.querySelector(".services__description").innerHTML = description;
  document.querySelector(".services__img-container").innerHTML = imagesItem;
})();

// control active services
let servicesList = document.querySelectorAll(".services__item");
let servicesImg = document.querySelectorAll(".services__img--wrap");
let servicesDescription = document.querySelectorAll(
  ".services__description--container"
);

function checkItemStatus(e) {
  e.preventDefault();
  let descriptionItem = "";
  servicesList.forEach((it) => {
    if (it.dataset.info === e.currentTarget.dataset.info) {
      it.classList.add("active");
      heroServices.map((itk) => {
        if (itk.id === it.dataset.info) {
          itk.description.forEach(
            (k) =>
              (descriptionItem =
                descriptionItem +
                `<p class="services__description--text">${k}</p>`)
          );
        }
      });
    } else {
      it.classList.remove("active");
    }
    servicesImg.forEach((it) => {
      if (it.dataset.info === e.currentTarget.dataset.info) {
        it.classList.add("active");
      } else {
        it.classList.remove("active");
      }
    });
    servicesDescription.forEach((it) => {
      if (it.dataset.info === e.currentTarget.dataset.info) {
        it.classList.add("active");
      } else {
        it.classList.remove("active");
      }
    });
  });
}

(function servicesItemActiv() {
  servicesList.forEach((it) => it.addEventListener("click", checkItemStatus));
})();
