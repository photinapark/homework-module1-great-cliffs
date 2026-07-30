$("tbody td").each(function(index) {
    if ($(this).text() != "Not Available" &&
        $(this).index() != 0) {
        $(this).addClass("selectable");
    }
});

$(".selectable").click(function(){
    $(this).toggleClass("highlight");
});

$(".selectable").hover(function(){
    $(this).css("cursor", "pointer");
});
