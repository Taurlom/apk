function timetableLinkHover(el, root) {
    $(el).hover(function () {
        $(this).closest(root).find('a').addClass('_hovered');
    }, function () {
        $(this).closest(root).find('a').removeClass('_hovered');
    })
}

timetableLinkHover($('.timetbl-current__link'), 'tr');