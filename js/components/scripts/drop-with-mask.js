$('._drop-btn').on('click', function () {

   var t = $(this),
       mask = $('.mask'),
       parent = t.closest('._parent'),
       target = $('._drop-box');

   t.toggleClass('_drop-btn_active');
   parent.toggleClass('_parent_active');
   target.slideToggle(300);
   mask.toggleClass('_drop-mask').fadeToggle(300);
});

$('.mask').on('click', function () {
   var t = $(this);

   if ( t.hasClass('_drop-mask') ) {
      t.removeClass('_drop-mask');
      $('._parent').removeClass('_parent_active');
      $('._drop-btn').removeClass('_drop-btn_active');
      $('._drop-box').slideUp(300);
   }

});