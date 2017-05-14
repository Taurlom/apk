var body = $('body'),
    main = $('.main'),
    h1 = $('.h1'),
    timeline = $('.timeline'),
    timelineMenuBox = $('.timeline__menu-box'),
    timelineMenu = $('.timeline__menu'),
    logoBox = $('.logo-box');

$('.start-link').on('click', function () {

    main.addClass('main_masked');
    h1.addClass('h1_hidden');
    timeline.addClass('timeline_dark');
    timelineMenuBox.removeClass('timeline__menu-box_index');
    logoBox.addClass('logo-box_hidden');
    timelineMenu.removeClass('timeline__menu_hidden');
    setTimeout( function () {
        body.addClass('body_dark');
    }, 500);

});

$('.timeline__d-list-item').on('click', function () {

    var t = $(this),
        position = t.position().left,
        width = t.width(),
        center = width / 2,
        parent = t.parent('.timeline__d-list'),
        btns = parent.find('.timeline__d-list-item'),
        mark = $('.timeline__d-list-line-mark');

    btns.removeClass('_active');
    t.addClass('_active');
    mark.css('left', (center + position));

});

