$.get("../common/mega-menu.html", function(data){
    $("#topnav").replaceWith(data);
});
$.get("../common/footer.html", function(data){
    $("#footer").replaceWith(data);
});