
$('.note-feed__close-btn').on('click', function() {
   var t = $(this),
       block = t.closest('.note-feed-block');

   block.addClass('closeblock').slideUp();
});

$('.mi-id__close-btn').on('click', function() {
   var t = $(this),
       block = t.closest('.my-id__parent-block');

   block.addClass('closeblock').slideUp();
});



