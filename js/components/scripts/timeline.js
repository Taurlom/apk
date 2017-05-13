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