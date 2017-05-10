$(document).ready(function(){

    var accordionOpen = $('.accordion-open'),
        accordionOpenHeight = accordionOpen.find('.accordion-content').outerHeight(true),
        accordionButton = $('.accordion-box li span');

    accordionOpen.height( accordionOpenHeight );

    accordionButton.click(function(){
        var t = $(this),
            container = t.next('.accordion-container'),
            buttons = t.parent().siblings('li').children('span'),
            otherConteiners = t.parent().siblings().find('.accordion-container'),
            outerConteiner = t.closest('.accordion-container'),
            outerContent = outerConteiner.children('.accordion-content'),
            openedConteinerHeight = t.closest('.accordion-box').find('.accordion-open').outerHeight(true);

        buttons.removeClass('accordion-arr-flip');

        if (container.hasClass('accordion-open')) {
            container.height(0).removeClass('accordion-open');
            t.removeClass('accordion-arr-flip');
            outerConteiner.height( outerContent.outerHeight(true) - container.children('.accordion-content').outerHeight(true) );
        } else {
            otherConteiners.removeClass('accordion-open').height(0);
            container.prev().addClass('accordion-arr-flip');
            container.height( container.children('.accordion-content').outerHeight(true) ).addClass('accordion-open');

            outerConteiner.height( outerContent.outerHeight(true) - openedConteinerHeight + container.children('.accordion-content').outerHeight(true) );

        }
    });
});