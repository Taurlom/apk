$('.lk-subject-open-btn').add('.lsl-btn').on('click', function() {
    var t = $(this).closest('.lk-subjects-block').find('.lk-subject-open-btn'),
        scroll = t.closest('.lk-subjects-block').find('.custom-scroll');

    t.toggleClass('open');
    t.closest('.lk-subjects-block').find('.lk-subjects__stat-table-box').slideToggle();
    scroll.mCustomScrollbar('update');
});