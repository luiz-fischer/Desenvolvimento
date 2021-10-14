      $.get("side_menu.html", function(data){
        $("#nav-placeholder").replaceWith(data);
    });