var msgSelect = $('._msgs-select');
var msgCheckbox = $('.message-check__wrapper input[type=checkbox]');
var delSelected = $('._delete-selected');

msgSelect.on('change', function () {
    if ($(this).is(':checked')) {
        msgCheckbox.each(function () {
            $(this).prop("checked", true);
        });
        toggleRemove(true);
    } else {
        msgCheckbox.each(function () {
            $(this).prop("checked", false);
        });
        toggleRemove(false);
    }
});

msgCheckbox.on('change', function () {
    if (msgCheckbox.filter(':checked').length > 0) {
        toggleRemove(true);
    } else {
        toggleRemove(false);
    }
    if (msgCheckbox.filter(':checked').length == msgCheckbox.length) {
        msgSelect.prop("checked", true);
    } else {
        msgSelect.prop("checked", false);
    }
});

delSelected.on('click', function () {
    msgCheckbox.filter(':checked').each(function () {
        var selfRoot = $(this).closest('.lk-message__grid');
        selfRoot.addClass('_closing');
        setTimeout(function () {
            selfRoot.remove();
            disableCheckAll();
            checkChecked();
        }, 300)
    });
});

closeBlock($('.msg-delete'), $('.lk-message__grid'), 300);

function toggleRemove(toggle) {
    if (toggle) {
        delSelected.addClass('_del-visible');
    } else {
        delSelected.removeClass('_del-visible');
    }
}

function disableCheckAll() {
    if ($('.lk-message__grid').length == 0) {
        msgSelect.prop('checked', false).prop('disabled', true);
        toggleRemove(false);
    }
}

function checkChecked() {
    if ($('.message-check__wrapper input[type=checkbox]').filter(':checked').length == 0) {
        toggleRemove();
    }
}

/*hide blocks on cross click*/

function closeBlock(elSelector, rootSelector, delay) {
    elSelector.on('click', function () {
        var self = $(this);
        var selfRoot = self.closest(rootSelector);
        selfRoot.addClass('_closing');
        setTimeout(function () {
            selfRoot.remove();
            disableCheckAll();
            checkChecked();

        }, delay);

    })
}

