if ( $('.icon_close-sidebar').length > 0 ) {
	var lessonCloseButton = $('.icon_close-sidebar'),
		lessonAnchor = $('.lesson-sidebar'),
		lessonAnchorTop = lessonAnchor.offset().top,
		lessonSidebar = lessonCloseButton.siblings('.lesson-sidebar__item'),
		lessonContent = lessonAnchor.siblings('.lesson-content'),
		startWindowPosition = 0,
		newWindowPosition = 0;

	$(window).scroll(function () {

		startWindowPosition = $(window).scrollTop();

        var lessonSidebarTopHeight = lessonSidebar.outerHeight(true) + lessonAnchorTop,
            windowHeight = $(window).height(),
			sidebarHeight = lessonSidebar.outerHeight(true),
			closeSidebarHeight = lessonSidebarTopHeight - windowHeight + 80;

		if ( sidebarHeight > 600 && lessonSidebar.hasClass('lesson-sidebar__content_open') ) {
			if ( startWindowPosition > closeSidebarHeight && startWindowPosition > newWindowPosition ) {
				closeSidebar();
			}
		} else if (lessonSidebar.hasClass('lesson-sidebar__content_open')) {
			if ( startWindowPosition > windowHeight && startWindowPosition > newWindowPosition ) {
				closeSidebar();
			}
		}

		newWindowPosition = startWindowPosition;

		if ($(this).scrollTop() >= lessonAnchorTop && lessonAnchor.hasClass('sidebar-close') ) {
			lessonCloseButton.addClass('lesson-sidebar-fixed');
		} else {
			lessonCloseButton.removeClass('lesson-sidebar-fixed');
		}

	});

	lessonCloseButton.on('click', function(){

		var t = $(this);

		if (lessonAnchor.hasClass('sidebar-open') && lessonContent.hasClass('lesson-content_close')) {
			closeSidebar();
		}
		else if (lessonAnchor.hasClass('sidebar-close') && lessonContent.hasClass('lesson-content_open')) {

			if ( lessonCloseButton.hasClass('lesson-sidebar-fixed') ) {
				$('html, body').animate( { scrollTop: lessonAnchorTop }, 500 );
			}
			t.removeClass('icon_rotate_180').addClass('icon_rotate_0');
			lessonAnchor.removeClass('sidebar-close').addClass('sidebar-open');
			lessonSidebar.removeClass('lesson-sidebar__content_hide').addClass('lesson-sidebar__content_open');
			lessonContent.removeClass('lesson-content_open').addClass('lesson-content_close');
		}
	});
}

function closeSidebar () {
	lessonCloseButton.removeClass('icon_rotate_0').addClass('icon_rotate_180');
	lessonSidebar.removeClass('lesson-sidebar__content_open').addClass('lesson-sidebar__content_hide');
	lessonContent.removeClass('lesson-content_close').addClass('lesson-content_open');
	lessonAnchor.removeClass('sidebar-open').addClass('sidebar-close');
}