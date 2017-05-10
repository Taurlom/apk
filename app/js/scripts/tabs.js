$('.user-action li').on('click', function () {
    var el = $(this),
        root = el.closest('.menu-slide__content'),
        index = root.find('.user-action li').index(el),
        contents = root.find('> .tab-content');
    
    if (!el.hasClass('tab-active')) {
        root.find('> .menu-slide__row').find('> .user-action').find('.tab-active').removeClass('tab-active');
        el.addClass('tab-active');
        contents.removeClass('tab-content-visible').eq(index).addClass('tab-content-visible');
    }
});
