// open advanced

$('._search-hamburger-btn').on('click', function () {
    var t = $(this),
        parent = t.closest('.search-form'),
        subMenu = parent.find('.advanced-search');

    t.toggleClass('_open');
    parent.toggleClass('_open');
    subMenu.slideToggle(300);
    $('.mask').fadeToggle(300);
});

$('.mask').on('click', function () {
    var t = $(this);

    t.fadeOut(300);
    $('.advanced-search').slideUp(300);
    $('.search-form').add('._search-hamburger-btn').removeClass('_open');
});
