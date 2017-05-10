require('../../vendor/chosen.jquery.min.js');

$('.chosen-select').chosen({
    disable_search_threshold: 10,
    no_results_text: "Ничего не найдено"
});


// remove placeholder-option if its mobile
var selectAll = $('select');
selectAll.each(function () {
    var t = $(this),
        firstOption = t.find('option').eq(0);

    if ( t.is(':visible') ) {

        if ( firstOption.text() == '' ) {
            firstOption.remove();
        }

    }

});

//function addSelectGradient () {
//
//    $('.wrapper-content').find('.chosen-container').each( function() {
//
//        var t = $(this),
//            selfWidth = t.outerWidth(),
//            span = t.find('span'),
//            spanwidth = span.outerWidth();
//
//        if ( spanwidth >= selfWidth ) {
//            t.addClass('cutoff');
//        } else {
//            t.removeClass('cutoff');
//        }
//
//    });
//
//}
//
//addSelectGradient();

// require('../../vendor/mCustomScrollbar.js');
// $('.chosen-results').mCustomScrollbar();
// $('.chosen-select').on('chosen:showing_dropdown', function() {
//     console.log('fsd');
//     setTimeout(function () {
//         $('.chosen-results').mCustomScrollbar('update');
//         console.log('aaa');
//     }, 500)
// });