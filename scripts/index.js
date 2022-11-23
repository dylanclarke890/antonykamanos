document.addEventListener("DOMContentLoaded", addEvents);

function scrollToElement(id) {
  if (!id) return;
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

function isWithinSection(section, sibling, yPos) {
  const y = yPos ?? window.scrollY;
  return y > section.offsetTop && y < sibling.offsetTop;
}

function addEvents() {
  const nav = document.getElementById("navbar");
  const bgSolid = "bg-solid";

  // Sections
  const intro = document.getElementById("intro"),
    about = document.getElementById("about"),
    goodeats = document.getElementById("goodeats"),
    social = document.getElementById("social"),
    testimonial = document.getElementById("testimonial");

  window.addEventListener("scroll", () => {
    if (isWithinSection(intro, about)) nav.classList.add(bgSolid);
    else nav.classList.remove(bgSolid);
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
