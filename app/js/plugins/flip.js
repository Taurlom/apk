require('../../vendor/jquery.flip.js');

$("._card-click").flip({
    front: '.flip-card__front',
    back: '.flip-card__back',
    speed: 500

});

$("._card-hover").flip({
    front: '.flip-card__front',
    back: '.flip-card__back',
    trigger: 'hover',
    speed: 500
});