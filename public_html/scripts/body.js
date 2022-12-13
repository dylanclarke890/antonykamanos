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
}
