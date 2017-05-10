$('.test__tab').on('click', function () {
    var el = $(this),
        root = el.closest('.tabs'),
        index = root.find('.test__tab').index(el),
        contents = root.find('.test__task');

    if (!el.hasClass('tab-active')) {
        root.find('.test__tab_active').removeClass('test__tab_active');
        el.addClass('test__tab_active');
        
        contents.removeClass('test__task_active').eq(index).addClass('test__task_active');

    }
});
