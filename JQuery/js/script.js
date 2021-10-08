$(document).ready(function () {
  $("#main").hide();

  let mostrar = this.value;

  $("#search").keyup(function () {
    if ((mostrar = "Mostrar")) {
      $("#main").show();
    } else {
      $("#main").hide();
    }
  });
});
