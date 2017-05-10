/*require('../../vendor/sliiide.min.js');

var settings = {
    toggle: ".header__login a", 
    exit_selector: ".slider-exit", 
    animation_duration: "0.5s", 
    place: "top", 
    animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", 
    body_slide: false, 
    no_scroll: false
};

$('#top-menu').sliiide(settings);

*/

var slide = $('.menu-slide'),
	slide_close = $('.slider-exit'),
	link = $('.header__login a'),
	content_height = $('.menu-slide .wrapper-content').outerHeight(),
	window_height = $(window).outerHeight();
	

link.on('click', function () {

	var index = $(link).index(this),
		tab = $('.user-action li'),
		tab_content = $('.tab-content');
 
    if (slide.hasClass('menu-slide_hide')) {
        slide.removeClass('menu-slide_hide').addClass('menu-slide_show');
        tab.removeClass('tab-active').eq(index).addClass('tab-active');
        tab_content.removeClass('tab-content-visible').eq(index).addClass('tab-content-visible');

        $(document).outerHeight(window_height);
    }	
});

slide_close.on('click', function () {
    if (slide.hasClass('menu-slide_show')) {
        slide.removeClass('menu-slide_show').addClass('menu-slide_hide');
    }		
});
