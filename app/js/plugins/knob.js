require('../../vendor/jquery.knob.js');

$('.circle-diagram').knob({
    readOnly: true,
    thickness: '.1',
    inputColor: '#262626',
    fgColor: '#eac40a',
    width: 96,
    height: 96,
    dynamicDraw: true
});

$('.circle-grade').knob({
    readOnly: true,
    thickness: '.1',
    inputColor: '#262626',
    fgColor: '#eac40a',
    width: 96,
    height: 96,
    min: 1,
    max: 5,
    dynamicDraw: true
});

$('.circle-diagram2').knob({
    readOnly: true,
    thickness: '.1',
    inputColor: '#fff',
    fgColor: '#eac40a',
    width: 96,
    height: 96,
    dynamicDraw: true
});

$('.circle-grade2').knob({
    readOnly: true,
    thickness: '.1',
    inputColor: '#fff',
    fgColor: '#eac40a',
    width: 96,
    height: 96,
    min: 1,
    max: 5,
    dynamicDraw: true
});

// animation

/*$('.circle-diagram').add('.circle-grade').each(function () {
    var elm = $(this);
    var perc = elm.attr("value");

    $({value: 0}).animate({ value: perc }, {
        duration: 1000,
        easing: 'swing',
        progress: function () {
            elm.val(Math.ceil(this.value)).trigger('change')
        }
    });
});*/
