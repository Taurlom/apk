$('.collection-search__input').on('click', function () {
    var t = $(this).parent();

    t.addClass('active');
    t.find('.collection-search-close').removeClass('search-close_hide');
    $('.mask').fadeIn();
});

$('.collection-search-close').on('click', function (e) {
    e.stopPropagation();

    $(this).addClass('search-close_hide');
    $('.mask').fadeOut();
    $('.collection-search').removeClass('active');
});

$('.mask').on('click', function () {
    $(this).fadeOut();
    $('.collection-search').removeClass('active');
    $('.collection-search-close').addClass('search-close_hide');
});

// clear
$('.search-input__clear-btn').on('click', function (e) {
    e.stopPropagation();

    var t = $(this),
        input = t.next();

    input.val('');
    t.addClass('closeblock');
});
$('.collection-search__input input').on('input', function () {
    var t = $(this),
        value = t.val(),
        closeButton = t.prev();

    if ( value != '' ) {
        closeButton.removeClass('closeblock').addClass('showblock');
    } else {
        closeButton.removeClass('showblock').addClass('closeblock');
    }
});