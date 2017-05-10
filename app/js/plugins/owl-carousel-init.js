require('../../vendor/modernizr-custom.js');
require('../../vendor/owl.carousel.js');

$("._owl").owlCarousel({
    navigation: true,
    singleItem: true,
    pagination: false,
    responcive: true,
    transitionStyle: "fadeUp",
    navigationText: '',
    autoPlay: 15000,
    rewindSpeed: 1000,
    slideSpeed: 1000,
    // autoplayTimeout: 15000,
    paginationSpeed: 100
});

$('._owl-small').owlCarousel({
    navigation: false,
    singleItem: true,
    slideSpeed: 600,
    pagination: true,
    rewindSpeed: 1000,
    responcive: true,
    autoPlay: true,
    autoplayTimeout: 5000
});