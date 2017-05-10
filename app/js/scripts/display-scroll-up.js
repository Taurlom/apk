var upButton = $('.page-up');

$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        upButton.fadeIn();
    } else {
        upButton.fadeOut();
    }
});
