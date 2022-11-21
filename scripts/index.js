window.addEventListener(
  "scroll",
  function () {
    if (window.scrollY > $("#intro").offset().top && window.scrollY < $("#about").offset().top) {
      $("nav").removeClass("cthru");
      $("nav").addClass("changeOp");
    } else if (
      window.scrollY > $("#geanchor1").offset().top &&
      window.scrollY < $("#geanchor2").offset().top
    ) {
      $("nav").removeClass("cthru");
      $("nav").addClass("changeOp");
    } else {
      $("nav").removeClass("changeOp");
      $("nav").addClass("cthru");
    }
  },
  false
);

$(document).ready(function () {
  // navigation click actions
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollTo(sectionID);
  });
  // scroll to top action
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  // mobile nav toggle
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $("#main-nav").toggleClass("open");
  });
});

function scrollTo(id) {
  console.log("HIT");
  const target = document.getElementById(id);
  const y = target.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
}
