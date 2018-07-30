$(window).load(function () {
    $('.accordion-toggle').bind('click', function () {
        var self = this;
        setTimeout(function () {
            theOffset = $(self).offset();
            if ($(window).width() <= 350) {
                $('body,html').animate({ scrollTop: theOffset.top - 75 });
            } else if ($(window).width() <= 510) {
                $('body,html').animate({ scrollTop: theOffset.top - 105 });                
            } else {
                $('body,html').animate({ scrollTop: theOffset.top - 60 });
            }
        }, 410); // ensure the collapse animation is done
    });
});

$(document).ready(function ($) {
    $('#accordion').find('.accordion-toggle').click(function () {

        //Expand or collapse this panel
        $(this).next().slideToggle('slow');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('slow');
    });
});