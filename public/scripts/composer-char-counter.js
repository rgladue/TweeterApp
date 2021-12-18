$(document).ready(function () {


  // text input counter that tracks number of characters.
  $("#tweet-text").on("input", function () {
    let field = $("textarea");

    $(".counter").val(140 - field.val().length);
    $(".counter").css("color", "charcoal");

    if (field.val().length >= 1) {
      $("empty-field").slideDown(1000);
    }

    if ($(".counter").val() <= 0) {
      $(".counter").css("color", "red");
    } else if ($(".counter").val() > 0) {
      $(".counter").css("color", "charcoal");
    }
  });
});