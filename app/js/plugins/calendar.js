require('../../vendor/jquery-ui-datapicker.js');

var settings = {
    changeYear: true,
    changeMonth: true,
    dateFormat: "dd.mm.yy",
    yearRange: "-90:+0",
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
};

$('.datepicker').datepicker(
    settings
);

$('.lk-datepicker').datepicker(
    $.extend(settings, {
        showOn: "both",
        buttonText: ""
    })
);


$('.diary-datepicker-old').datepicker(
    $.extend(settings, {
        showOn: "both",
        buttonText: "",
        defaultDate: "-7d"
    })
);

$('.diary-datepicker-new').datepicker(
    $.extend(settings, {
        showOn: "both",
        buttonText: ""
    })
);


$('#ui-datepicker-div').wrap("<div class='ll-skin-melon'></div>");

// date format: dd.mm.yyyy
function diaryDate(a) {
    return d = a.getDate(), d < 10 ? x = "0" + d : x = d, m = a.getMonth() + 1, m < 10 ? i = "0" + m : i = m, x + "." + i + "." + a.getFullYear()
}

$('.lk-date-1').val(diaryDate(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)));
$('.lk-date-2').val(diaryDate(new Date()));