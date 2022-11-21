jQuery(function ($) {
  var open = false;

  function resizeMenu() {
    if ($(this).width() < 768) {
      if (!open) {
        $("#menu").hide();
      }
      $("#menubutt").show();
      $("#logo").attr("src", "images_def/logo_small.png");
    } else if ($(this).width() >= 768) {
      if (!open) {
        $("#menu").show();
      }
      $("#menubutt").hide();
      $("#logo").attr("src", "images_def/logo_big_def.png");
    }
  }

  function setupMenuButton() {
    $("#menubutt").click(function (e) {
      e.preventDefault();

      if (open) {
        $("#menu").fadeOut();
        $("#menubutt").toggleClass("selected");

        $("#menubutt").removeClass("highlight");
        $("#wrapper").removeClass("space");
        $("#menubutt").removeClass("repobutt");
        $("#title").removeClass("repologo");
      } else {
        $("#menu").fadeIn();
        $("#menubutt").toggleClass("selected");

        $("#menubutt").addClass("highlight");

        $("#wrapper").addClass("space");
        $("#menubutt").addClass("repobutt");
        $("#title").addClass("repologo");
      }
      open = !open;
    });
  }

  $(window).resize(resizeMenu);

  resizeMenu();
  setupMenuButton();
});
