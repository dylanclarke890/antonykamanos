document.addEventListener("DOMContentLoaded", addEvents);

function addEvents() {
  const scrollTopActions = document.getElementsByClassName("scroll-top");
  addScrollTopEvents(scrollTopActions);

  const scrollLinks = document.getElementsByClassName("scroll-link");
  addScrollLinkEvents(scrollLinks);

  const subscribeLinks = document.getElementsByClassName("subscribe-link");
  for (let link of subscribeLinks) {
    link.href = "mailto:tysoyoga@outlook.com?subject=I am interested in the TYSO MBS program";
  }

  const elementsToUpdate = document.getElementsByClassName("current-year");
  updateCurrentYear(elementsToUpdate);

  // mobile
  const menuBtn = document.getElementById("menu-btn");
  const menuList = document.getElementById("menu-list");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("selected");
    if (menuOpen) {
      menuList.style.removeProperty("display");
    } else {
      menuList.style.display = "block";
    }
    menuOpen = !menuOpen;
  });

  const mobileLinks = document.querySelectorAll("#menu-list a");
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => menuBtn.dispatchEvent(new Event("click")))
  );
}
