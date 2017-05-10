require('../../vendor/jquery.dotdotdot.js');

$('.dotdotdot').dotdotdot({
    wrap: 'word',
    watch: true,
    tolerance: 0
});

$('.info-cut').dotdotdot();
$('.info-cut').trigger('isTruncated', function( isTruncated ) {
    if ( isTruncated ) {
        $(this).parent().append('<div class="dotdotdot-arr"><i class="icon icon_arrow-small-down"></div>');
    }
});

// open dotdotdot

$('.dotdotdot-arr').on('click', function(e) {
    e.preventDefault();
    var t = $(this),
        outerBlock = t.parent(),
        dotedBlock = outerBlock.find('.info-cut'),
        hideBlock = outerBlock.find('.hideble-block');

    t.add(dotedBlock).toggleClass('open');
    hideBlock.slideToggle();

    dotedBlock.trigger('originalContent', function( content ) {
        dotedBlock.html( content );
    });

});