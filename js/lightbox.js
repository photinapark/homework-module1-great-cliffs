$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="West Cliff") {
           var img = $(this).clone();
            $('.box').append(img);        
        }

        if ($altvalue=="North Cliff") {
           var img = $(this).clone();
            $('.box').append(img);        
        }

        if ($altvalue=="East Cliff") {
            var img = $(this).clone();
            $('.box').append(img);
        }

        if ($altvalue=="South Cliff") {
            var img = $(this).clone();
            $('.box').append(img);
        }

    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});