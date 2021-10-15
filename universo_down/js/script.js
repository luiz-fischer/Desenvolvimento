$.get("side_menu.html", function (data) {
  $("#nav-placeholder").replaceWith(data);
});

$(document).on("click", ".side-menu > ul > li", function (e) {
  if ($(this).find(".sub-menu").length > 0) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("active");
    $(this).find(".sub-menu").stop().slideToggle();
  }
});
