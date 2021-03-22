const scrollUp__btn = document.querySelector(".scrollUp__button");

scrollUp__btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
});
