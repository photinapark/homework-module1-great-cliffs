    var partners = [];
    var imageList = [];
    var image;
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    partners.push("partner-bustour");
    partners.push("partner-cabinrental");
    partners.push("partner-campingadv");
    partners.push("partner-collegetours");
    partners.push("partner-rentalbike");
    partners.push("partner-tourgroup");
    
    for (var i = 0; i < partners.length; i++) {

    image = openList +
            "<img src='images/partners/" +
            partners[i] +
            ".png'>" +
            closeList;

    imageList.push(image);
}
    imageList = imageList.join("");

    document.getElementById("partners").innerHTML = imageList;  
