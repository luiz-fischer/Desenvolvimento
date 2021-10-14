// $(document).ready(function () {
//   $("input[id!='primeiroNome']").attr("readonly", true);

//   $("input").on("input propertychange", function () {
//     if ($(this).val() == "") {
//       $("input[id!='primeiroNome']").attr("readonly", true);
//     } else {
//       $("input").attr("readonly", false);
//     }
//   });
// });

$(document).ready(function () {
  $(".teste").click(function () {
    $("#teste").slideToggle();
  });
  $(".teste2").click(function () {
    $("#teste2").slideToggle();
  });
  $(".teste3").click(function () {
    $("#teste3").slideToggle();
  });
});

  $('#navbar').click(function(){
    $(this).children('a').toggleClass('active');
    $(this).siblings('li').children('a').removeClass('active');
});
