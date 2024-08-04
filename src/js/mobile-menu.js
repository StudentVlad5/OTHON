const menuBtnRef = document.querySelector(".mobile-btn");
const mobileMenuRef = document.querySelector(".mobile-menu");
const buttonAnimation = document.querySelector(".animation__container");
const menuLogo = document.querySelector(".logo--dark");
const mobileLogo = document.querySelector(".logo--bright");
const menuLinks = document.querySelector(".mobile-menu__navigation__list");

(() => {
  const toggleMenu = () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuLogo.classList.toggle("is-open");
    buttonAnimation.classList.toggle("animate");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    mobileLogo.classList.toggle("is-open");
    !expanded ? fixedModalOverflow() : closeModalOverflow();
  };

  menuBtnRef.addEventListener("click", toggleMenu);
  menuLinks.addEventListener("click", toggleMenu);
})();

// Fixed window when modal opened
function fixedModalOverflow() {
  document.querySelector("body").style.overflow = "hidden";
}

function closeModalOverflow() {
  document.querySelector("body").style.overflow = "unset";
}

// close by ESC
document.onkeydown = function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    menuBtnRef.setAttribute("aria-expanded", true);
    menuBtnRef.classList.remove("is-open");
    menuLogo.classList.add("is-open");
    buttonAnimation.classList.remove("animate");
    mobileMenuRef.classList.remove("is-open");
    mobileLogo.classList.remove("is-open");
    closeModalOverflow();
  }
};


