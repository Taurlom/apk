$('._tabs__tab').on('click', function () {
    var el = $(this),
        root = el.closest('._tabs'),
        index = root.find('._tabs__tab').index(el),
        contents = root.find('._tabs__content');

    if (!el.hasClass('_tab-active')) {
        root.find('._tab-active').removeClass('_tab-active');
        el.addClass('_tab-active');
        contents.removeClass('_tab-cont-visible').eq(index).addClass('_tab-cont-visible');
    }
});


