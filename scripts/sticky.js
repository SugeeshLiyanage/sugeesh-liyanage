function checkWidth() {
    var windowWidth = $(window).width();
    if (windowWidth > 510) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('div.smaller').addClass("sticky");
            }
            else {
                $('div.smaller').removeClass("sticky");
            }
        });
    }
}

$(document).ready(function () {
    checkWidth();
});

$(window).resize(function () {
    checkWidth();
});