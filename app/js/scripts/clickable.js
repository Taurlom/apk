var clickable = $('[class*=_clickable]');
var close_cross = $('._win-close');
var timeout;
var timer = 300;
var hideable = $('.main').add('.footer');
var global_container = $('.outer-sf');

clickable.on('click', function (e) {

    e.stopPropagation();
    var el = $(this);
    var target;

    var fadeout = function () {
        el.removeClass('_clicked');
        if (target !== undefined) {
            target.removeClass('_triggered');
            timeout = setTimeout(function () {
                target.removeClass('_displayed');
            }, timer);
        }
    };

    if (el.attr('data-timer')) {
        timer = el.data('timer');
    }

    if (el.attr('data-target')) {
        $('body').off('click.trigger').find('._clicked, ._triggered').removeClass('_clicked _triggered');
        $('._displayed').removeClass('_displayed');
        global_container.show();
        hideable.show();
        target = $('.' + el.data('target'));
        if (el.data('target') == '_login-menu') {
            var index_clicked = $('.header__login').find('a').index(el);
            $('.user-action').find('li').removeClass('tab-active').eq(index_clicked).addClass('tab-active');
            $('.tab-content').removeClass('tab-content-visible').eq(index_clicked).addClass('tab-content-visible');
        }
    }

    if (!el.hasClass('_clicked')) {
        el.addClass('_clicked');
        window.clearTimeout(timeout);
        if (target !== undefined) {
            target.addClass('_triggered _displayed');
        }
        if (el.hasClass('_clickable--outer')) {
            $('body').on('click.trigger', function () {
                fadeout();
                $(this).off('click.trigger');
            })
        }
        if (el.data('target') == '_login-menu' || el.data('target') == 'hmbrg-menu') {
            setTimeout(function () {
                hideable.hide();

                if (el.data('target') == '_login-menu') {
                    global_container.hide();
                }
            }, timer);
        }


    } else {
        fadeout();
        $('body').off('click.trigger');
    }


});

close_cross.on('click', function () {
    $('body').off('click.trigger').find('._clicked, ._triggered').removeClass('_clicked _triggered');
    timeout = setTimeout(function () {
        $('._displayed').removeClass('_displayed');
    }, timer);
    global_container.show();
    hideable.show();
});

$('._stop-prop').on('click', function (e) {
   e.stopPropagation();
});
