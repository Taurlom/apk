$(function (){

    $('.course-themes-btn-1').on('click', function() {
        var box = $('.lk-themes-list-box'),
            chks = box.find('input[type="checkbox"]'),
            btns = box.find('.lk-themes-list-btn');

        chks.prop('checked', true);
        btns.addClass('checked');
        $('.lk-themes-chk').removeClass('checked');
        $('.lk-subject-themes').slideUp();
    });
    $('.course-themes-btn-2').on('click', function() {
        $('.lk-subject-themes').slideDown();
        $('.lk-themes-list-box').mCustomScrollbar('update');
    });


    $('.lk-themes-list-btn').on('click', function() {
        var t = $(this),
            chk = t.next().find('input[type="checkbox"]');

        t.toggleClass('checked');

        if ( t.hasClass('checked') ) {
            chk.prop('checked', true);
        } else {
            chk.prop('checked', false);
        }

        $('.lk-themes-chk').removeClass('checked');
    });

    $('.lk-chk-label').on('click', function() {
        var t = $(this),
            btn = t.closest('.lk-themes__sub-list').find('.lk-themes-list-btn');

        btn.removeClass('checked');
        $('.lk-themes-chk').removeClass('checked');
    });

    $('.lk-themes-chk').on('click', function() {
        var t = $(this),
            chk = t.parent().next().find('input[type="checkbox"]'),
            sbtn = t.parent().next().find('.lk-themes-list-btn');

        t.toggleClass('checked');

        if ( t.hasClass('checked') ) {
            chk.prop('checked', false);
            sbtn.removeClass('checked');
        } else {
            chk.prop('checked', true);
            sbtn.addClass('checked');
        }
    });

});