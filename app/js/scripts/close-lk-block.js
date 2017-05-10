// var close = $('.icon_delete-cross');
//
// close.on('click', function () {
//     var closed_block = $(this).parent().parent('.block_js'),
//         /*closed_block2 = $(this).parent().parent('.lk-user-stats'),*/
//         closed_col = $(this).parent().parent().parent('.lk-col-3');
//
//
//     closed_block.addClass('closeblock');
//
//     if (closed_block.siblings('.closeblock').length > 0) {
//
//         closed_col.addClass('closeblock');
//         setTimeout(function () {
//             $(closed_col).hide(200);
//         }, 300);
//     }
//
//     else if (closed_block.siblings('.closeblock').length == 0) {
//
//         closed_block.addClass('closeblock');
//         setTimeout(function () {
//             $(closed_block).hide(200);
//         }, 300);
//     }
// });

var close = $('.icon_delete-cross');
close.on('click', function () {
    var closed_block = $(this).parent().parent('.block_js'),
        blocksLength = $('.lk-right-block').filter(':visible').length - 1,
        closed_col = $(this).parent().parent().parent('.lk-col-3');
        closed_block.addClass('closeblock');
    if (blocksLength > 0) {
        closed_block.addClass('closeblock');
        setTimeout(function () {
            $(closed_block).hide(200);
        }, 300);
    } else {
        closed_col.addClass('closeblock');
        setTimeout(function () {
            $(closed_col).hide(200);
        }, 300);
    }
});



