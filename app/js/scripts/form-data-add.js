$('.addbutton2').on('click', function () {
    
    var el_row = $(this).closest('.lk__form-row'),
        content = el_row.prev().clone(),
        input_vz = $('#vz').val(),
        input_spec = $('#spec').val();    
       
     el_row.after(content);
    
    el_row.next().addClass('added-row-displayed').css('display', 'block');
    
    el_row.siblings('.lk__form-row').eq(3).find('.lk__form-add-data-vz').text(input_vz);

    el_row.siblings('.lk__form-row').eq(3).find('.lk__form-add-data-spec').text(input_spec);

    el_row.siblings('.lk__form-row').eq(0).find('.lk__input-text').val('');

    el_row.siblings('.lk__form-row').eq(1).find('.lk__input-text').val('');

});

