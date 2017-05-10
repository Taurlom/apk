// abc choice

$('.teachers-abc-choise button').on('click', function() {
    var t = $(this),
        btns = t.parent().find('button');

    btns.removeClass('active');
    t.addClass('active');
});

