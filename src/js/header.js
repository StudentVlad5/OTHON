import { menu } from "./DATA";

(function addmenu() {
  let menuList = "";
  let mobileMenu = "";
  menu.forEach((it, ind) => {
    if (ind === 0) {
      menuList =
        menuList +
        `<li class="navigation__item" data-info="${it}"><a class="navigation__link active" href="#${it}" aria-label="${it}">${it}</a></li>`;
    } else {
      menuList =
        menuList +
        `<li class="navigation__item" data-info="${it}"><a class="navigation__link" href="#${it}" aria-label="${it}">${it}</a></li>`;
    }
  });
  menu.forEach((it, ind) => {
    if (ind === 0) {
      mobileMenu =
        mobileMenu +
        `<li class="mobile-menu__navigation__item" data-info="${it}"><a class="mobile-menu__navigation__link navigation__link active" href="#${it}" aria-label="${it}">${it}</a></li>`;
    } else {
      mobileMenu =
        mobileMenu +
        `<li class="mobile-menu__navigation__item" data-info="${it}"><a class="mobile-menu__navigation__link navigation__link" href="#${it}" aria-label="${it}">${it}</a></li>`;
    }
  });
  document.querySelector(".navigation__list").innerHTML = menuList;
  document.querySelector(
    ".mobile-menu__navigation__list"
  ).innerHTML = mobileMenu;
})();


// add class "active" for menu
window.addEventListener("scroll", function handleChangeActiveClass(e) {
  e.preventDefault();
  let scrollY = window.scrollY + 140;
  const navItemList = document.querySelectorAll(".navigation__link");

  // const sectionList = document.querySelectorAll('.section');
  navItemList.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 20;

      if (scrollY < sectionTop && link.classList.contains("active")) {
        link.classList.remove("active");
      } else if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});