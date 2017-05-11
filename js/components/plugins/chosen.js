require('../../vendor/chosen.jquery.min.js');

$('.chosen-select').chosen({
    disable_search_threshold: 10,
    width: "100%",
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