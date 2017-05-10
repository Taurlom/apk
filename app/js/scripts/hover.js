function hover_timout(elements, animationTime, delay_time) {
    $.each(elements, function (index, el) {
        var timeout;
        var timeout_display;
        $(el).hover(function () {
            var self = $(this);
            timeout = setTimeout(function () {
                self.addClass('_hovered _displayed');
            }, delay_time);
            if ($(this).hasClass('_displayed')) {
                clearTimeout(timeout_display);
            }
        }, function () {
            var self = $(this);
            timeout_display = setTimeout(function () {
                self.removeClass('_displayed');
            }, animationTime);
            clearTimeout(timeout);
            self.removeClass('_hovered');
        });
    });
}

hover_timout($('._hoverable'), 300, 100);
