$('.lk-popup').find('.lk-form-submit').on('click', function () {
    $(this).closest('.lk-popup').addClass('closeblock');
    $('.mask').fadeOut(1000);
});

$('.my-id__add-child__btn').on('click', function () {
    var t = $(this);
    t.prev().prev().fadeIn(700);
    t.prev().fadeIn(700);
    t.fadeOut(0);
});