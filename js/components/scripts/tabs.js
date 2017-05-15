$('._tab-btn').on('click', function () {
    var t = $(this),
        btnsBox = t.closest('._tab-buttons'),
        btnNum = btnsBox.find('._tab-btn').index(t),
        tabBody = $('._tabs').find('._tab-body');

    if (!t.hasClass('_tab-active')) {
        btnsBox.find('._tab-active').removeClass('_tab-active');
        t.addClass('_tab-active');
        tabBody.removeClass('_tab-body_active').eq(btnNum).addClass('_tab-body_active');
    }
});


