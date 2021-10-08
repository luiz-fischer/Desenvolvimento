$(document).ready(function () {
  $("input[id!='primeiroNome']").attr("readonly", true);

  $("input").on("input propertychange", function () {
    if ($(this).val() == "") {
      $("input[id!='primeiroNome']").attr("readonly", true);
    } else {
      $("input").attr("readonly", false);
    }
  });
});
