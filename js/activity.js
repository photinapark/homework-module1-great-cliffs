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

//User interaction with the table cells
$(document).ready(function(){
    $("td").click(function(){
        var content = $(this).text();

        if(content != "Not Available") {
            $(this).toggleClass("tdhighlight");

        if($(this).hasClass("tdhighlight")) {
        $('#displaySelected').css("visibility", "visible");
        $('#displaySelected').css("margin-top", "2em");
        var site = $(this).index();
        var cliff = $("thead th").eq(site).text();
        $('#result').append("<p>" + content + " at " + cliff + "</p>");

        } else {
            $('#result p:contains('+content+')').remove();

            if ($('#result').has('p').length == false) {
                $('#displaySelected').css("visibility", "hidden");
                $('#displaySelected').css("margin-top", "0em");
            }
        }
    }
    });
});