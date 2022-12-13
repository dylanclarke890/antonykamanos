document.addEventListener("DOMContentLoaded", addEvents);

function addEvents() {
  addScrollTopEvents(document.getElementsByClassName("scroll-top"));
  updateCurrentYear(document.getElementsByClassName("current-year"));

  const scrollLinks = document.getElementsByClassName("scroll-link");
  addScrollLinkEvents(scrollLinks);
  const nav = document.getElementById("navbar");
  const bgSolid = "bg-solid",
    active = "active";

  // Sections - comment/uncomment as needed for solid navbar bg below.
  const intro = document.getElementById("intro");
  const about = document.getElementById("about");
  const goodeats = document.getElementById("goodeats");
  const social = document.getElementById("social");
  const testimonials = document.getElementById("testimonials");
  const sectionsNeedingSolidNavBg = [intro, about, goodeats, social, testimonials]; // Change as needed.

  window.addEventListener("scroll", () => {
    // window.scrollY returns top of page, offset by navbar height as we only
    // want to add the class when the bottom of it clips into the next section.
    const y = window.scrollY + nav.clientHeight;

    // applies/removes bg color if within applicable section.
    if (isWithinAnySection(sectionsNeedingSolidNavBg, y)) nav.classList.add(bgSolid);
    else nav.classList.remove(bgSolid);

    // sets the active tab
    for (let current of document.getElementsByClassName("section")) {
      if (isWithinAnySection([current], y + 10)) {
        for (let link of scrollLinks) {
          const { href } = link;
          const anchor = href.substring(href.lastIndexOf("#") + 1);
          if (current.id === anchor) link.classList.add(active);
          else link.classList.remove(active);
        }
        break;
      }
    }
  });

  window.dispatchEvent(new Event("scroll")); // sets the active tab / apply navbar bg if neccessary.

  // mobile
  const menuBtn = document.getElementById("menu-btn");
  const menuList = document.getElementById("menu-list");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("selected");
    if (menuOpen) {
      menuList.style.removeProperty("display");
    } else {
      menuList.style.display = "flex";
    }
    menuOpen = !menuOpen;
  });

  const mobileLinks = document.querySelectorAll("#menu-list a");
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => menuBtn.dispatchEvent(new Event("click")))
  );
}
