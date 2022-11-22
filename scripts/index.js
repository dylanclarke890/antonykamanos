document.addEventListener("DOMContentLoaded", addEvents);

function addEvents() {
  const intro = document.getElementById("intro"),
    about = document.getElementById("about"),
    geAnchor1 = document.getElementById("geanchor1"),
    geAnchor2 = document.getElementById("geanchor2"),
    nav = document.querySelector("nav");
  const transparentClass = "cthru",
    changeOp = "changeOp";

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > intro.offsetTop && y < about.offsetTop) {
      nav.classList.remove(transparentClass);
      nav.classList.add(changeOp);
    } else {
      nav.classList.remove(changeOp);
      nav.classList.add(transparentClass);
    }
  });

  const scrollLinks = document.getElementsByClassName("scroll-link");
  for (let link of scrollLinks) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToElement(link.getAttribute("data-id"));
    });
  }

  const scrollTopActions = document.getElementsByClassName("scroll-top");
  for (let action of scrollTopActions) {
    action.addEventListener("click", (e) => {
      e.preventDefault();
      scrollTo(0);
    });
  }
}

function scrollToElement(id) {
  const target = document.getElementById(id);
  const y = target.getBoundingClientRect().top + window.scrollY;
  scrollTo(y);
}

function scrollTo(y) {
  window.scroll({
    top: y,
    behavior: "smooth",
  });
}
