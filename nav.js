const nav = document.querySelector("nav .hamburger-nav");
const burgerDivs = document.querySelectorAll(".hamburger-nav div");
const ul = document.getElementById("navUl");
const flexNav = document.querySelector("nav");
const liArr = ul.querySelectorAll("li");

const navTransition = () => {
  // disable click on element
  nav.style.pointerEvents = "none";
  // disable scrolling
  document.getElementsByTagName("body")[0].style.overflow = "hidden";

  nav.classList.toggle("open");

  // disable click during transition
  burgerDivs.forEach((burgerDiv) =>
    burgerDiv.addEventListener("transitionend", hamburgerNav)
  );

  // checks if ul is for mobile then open
  if (ul.classList.contains("ul-mobile")) {
    ul.classList.toggle("open");
    ul.classList.remove("close");
    flexNav.classList.add("white");
  }

  if (ul.className === "ul-mobile") {
    // disable click during slide down transition
    nav.style.pointerEvents = "none";
    flexNav.classList.remove("white");

    // enable every event that's been disabled after animation
    ul.addEventListener("animationend", function (e) {
      if (e.animationName === "slideDown") {
        ul.classList.add("close");
        nav.style.pointerEvents = "auto";
        document.getElementsByTagName("body")[0].style.overflow = "visible";
      }
    });
  }
};

// navigation button
nav.addEventListener("click", navTransition);

// li -> to close the mobile when li has been clicked
liArr.forEach((li) => {
  li.addEventListener("click", navTransition);
});

// after open transition enable click
function hamburgerNav(e) {
  if (e.propertyName === "transform") {
    nav.style.pointerEvents = "auto";
  }
}

// to check screen size while screen size still not change
screenSize();

// event listener when screen changes or resize
window.addEventListener("resize", screenSize);
function screenSize() {
  if (document.documentElement.clientWidth > 600) {
    ul.className = "ul-desktop";
    ul.classList.remove("open");
    nav.style.pointerEvents = "auto";
    nav.classList.remove("open");
    flexNav.classList.remove("white");
  } else {
    ul.className = "ul-mobile close";
    ul.classList.remove("open");
    nav.classList.remove("open");
    flexNav.classList.remove("white");
  }
}

// scrolling for sticky navigation
window.addEventListener("scroll", function () {
  // window.pageYOffset || document.documentElement.scrollTop,
  flexNav.classList.toggle(
    "sticky",
    window.pageYOffset > 0 || document.documentElement.scrollTop > 0
  );
});
