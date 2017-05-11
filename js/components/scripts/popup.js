var popupCloseButton = $('.popup__close-btn'),
    popupShowButton = $('._popup__show-btn'),
    mask = $('.mask');

popupCloseButton.on('click', function () {
    var t = $(this);

    t.parent().removeClass('_popup-show').addClass('_popup-hide');
    mask.fadeOut(500);
});

popupShowButton.on('click', function () {
    $('.popup').removeClass('_popup-hide').addClass('_popup-show');
    mask.fadeIn(400);
});
