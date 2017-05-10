$('.newsfeed-date-filter__btn').on('click', function(e) {
    e.stopPropagation();
    var t = $(this);
    t.parent().toggleClass('open');
});


$('.newsfeed-type-choise button').on('click', function() {
    var t = $(this),
        btns = t.parent().find('button');

    btns.removeClass('active');
    t.addClass('active');
});


// Subscrib button

$('.news-feed__tomail').on('click', function (e) {
    e.stopPropagation();
    $(this).find('.news-feed__tomail-box').toggleClass('open');
});

// stop propagation

$('.newsfeed-date-filter__dropdown')

    .add('.news-feed__tomail-box')

    .on('click', function(e) {
        e.stopPropagation();
    });