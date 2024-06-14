function check() {
  if (
    document.getElementById("ck1").checked &&
    document.getElementById("ck2").checked &&
    document.getElementById("ck3").checked
  ) {
    if (!$(".wrapper").hasClass("throb")) {
      $(".wrapper").addClass("throb");
    } else {
      if ($(".wrapper").hasClass("throb")) {
        $(".wrapper").removeClass("throb");
      }
    }
  }
}

$(document).ready(function () {
  $("#backgroundMusic")[0].play();
});
