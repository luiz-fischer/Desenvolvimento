//$(document).ready(function () {
//  $("#sub-menu").hide();
//});

$(".main-container.collapse").on("shown.bs.collapse", function () {
  //when a collapsed div is shown hide all other collapsible divs that are visible
  $(".main-container.collapse").not($(this)).collapse("hide");
});

$.get("menu.html", function (data) {
  $("#nav-placeholder").replaceWith(data);
});
$(document).ready(function(){
  $("#form-cadastro").click(function(){
       
      $(function(){
          $("#form-cadastro-estrela").load("cadastro_estrela.html"); 
      });
  })
});