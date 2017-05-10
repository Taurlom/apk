var selectOne = $('._selecteable-one');

selectOne.on('click',function () {
    selectOne.removeClass('_selected');
    $(this).addClass('_selected');
});
