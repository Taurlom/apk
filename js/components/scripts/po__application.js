$('._po_app-btn').on('click', function () {
   var t = $(this),
       parent = t.closest('._parent'),
       message = parent.find('._child');

    message.addClass('_show');

});