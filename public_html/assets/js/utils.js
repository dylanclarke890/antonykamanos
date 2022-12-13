function scrollToElement(id) {
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
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

function isWithinAnySection(sections, yPos) {
  const y = yPos ?? window.scrollY;
  for (let current of sections) {
    const next = current.nextElementSibling;
    if ((!next || next.localName !== "div") && current.offsetTop <= y) return true; // within final section
    if (isWithinSection(current, next, y)) return true;
  }
  return false;
}

function addScrollLinkEvents(scrollLinks) {
  for (let link of scrollLinks)
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const { href } = link;
      scrollToElement(href.substring(href.lastIndexOf("#") + 1));
    });
}

function addScrollTopEvents(scrollTopActions) {
  for (let action of scrollTopActions)
    action.addEventListener("click", (e) => {
      e.preventDefault();
      scrollTo(0);
    });
}

function updateCurrentYear(elements) {
  const currentYear = new Date().getFullYear();
  for (let element of elements) {
    element.innerHTML = currentYear;
  }
}
