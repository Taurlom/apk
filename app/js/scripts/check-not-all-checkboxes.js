checkSomeCheckboxes($('._check-not-all'), 2);

function checkSomeCheckboxes(elementsWrapper, checkedLimit) {
    elementsWrapper.each(function () {
        var checkedArray = [];
        $(this).find('input[type=checkbox]').on('change', function () {
            var el = $(this);
            var root = el.closest(elementsWrapper);
            var elSiblings = root.find('input[type=checkbox]');
            checkedArray.push(this);
            if (checkedArray.length > checkedLimit) {
                checkedArray.splice(0, 1);
            }
            if (elSiblings.filter(':checked').length > checkedLimit) {
                checkedArray = $(checkedArray);
                elSiblings.prop('checked', false);
                checkedArray.eq(0).prop('checked', true);
                el.prop('checked', true);
            }
        });
    });
}
