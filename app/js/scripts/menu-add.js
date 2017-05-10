$('.addbutton').on('click', function () {
    var el = $(this);
    var el_row = el.closest('.lk__form-row');
    var content = el_row.prev().clone();
    el_row.before(content);
    el_row.prev().addClass('added-row-displayed').find('.lk__form-label').html('').end().find('.lk__input-text').val(''); 
});

$('.lk__form-block').on('click', '.icon_delete-cross', function () {
    var el = $(this);
    
    el.closest('.lk__form-row').removeClass('added-row-displayed').addClass('closeblock');

   setTimeout(function () {
        el.closest('.lk__form-row').remove();
    },300);
});

