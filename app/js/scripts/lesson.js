;(function ($) {

    // open-accordion
    $('#lesson-stat-chk1').on('change', function() {
        var t = $(this),
            a_box = $('.accordion-container'),
            span = a_box.prev();

        if ( t.prop('checked') ) {
            a_box.addClass('accordion-open').height(
                a_box.children('.accordion-content').outerHeight(true)
            );
            span.addClass('accordion-arr-flip');
        } else {
            a_box.height(0).removeClass('accordion-open');
            span.removeClass('accordion-arr-flip');
        }
    });

    // remove complete lessons
    $('#lesson-stat-chk2').on('change', function() {
        var t = $(this),
            les = $('.complete').closest('.lesson-block'),
            a_box = $('.accordion-open');

        if ( t.prop('checked') ) {
            les.css('display', 'none');
            a_box.height(
                a_box.children('.accordion-content').outerHeight(true)
            );
        } else {
            les.css('display', 'block');
            a_box.height(
                a_box.children('.accordion-content').outerHeight(true)
            );
        }

    });

    // open/close statistics
    
    $('.icon_lesson-stat-open').on('click', function() {

        var el = $('.icon_lesson-stat-open'),
            statistics = el.parent().siblings('.lesson-statistics__box'),
            close = statistics.find('.icon_close-acc');

            el.removeClass('lesson-stat-open_show').addClass('lesson-stat-open_hide');
            statistics.slideDown();
            close.removeClass('icon_close-acc_hide').addClass('icon_close-acc_show');
         });      

    
    $('.icon_close-acc').on('click', function() {

        var el = $('.icon_close-acc'),
            statistics = el.parent('.lesson-statistics__box'),
            open_icon = statistics.next().find('.icon_lesson-stat-open');

            el.removeClass('icon_close-acc_show').addClass('icon_close-acc_hide');
            statistics.slideUp();
            open_icon.removeClass('lesson-stat-open_hide').addClass('lesson-stat-open_show');
         });

    
    // temp

    $('.lesson-teachers__button').on('click', function() {
        $('.lesson-teachers__line').fadeIn(500);
    });

})(jQuery);

