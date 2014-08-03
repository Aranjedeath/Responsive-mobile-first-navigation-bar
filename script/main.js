$(document).ready(function(){

toggle_nav_container();

});



var toggle_nav_container = function () {

	

	var 	$toggleButton = $('#toggle_m_nav');
			$navContainer = $('#m_nav_container');
			$menuButton = $('#m_nav_menu')
			$menuButtonBars = $('.m_nav_ham');
			$wrapper = $('#wrapper');
	// hide the menu by default, show the menu button
	$menuButton.show();


	// toggle the container on click of button (can be remapped to $menuButton)

	$toggleButton.on("click", function(){

		// declare a local variable for the window width
		var $viewportWidth = $(window).width();

		// if statement to determine whether the nav container is already toggled or not

		if($navContainer.is(':hidden'))
		{
			$navContainer.slideDown('slow');
			$menuButtonBars.removeClass('button_closed')
			$menuButtonBars.addClass('button_open')
			$wrapper.removeClass('closed_wrapper')
			$wrapper.addClass("open_wrapper")
		}
		else
		{
			$navContainer.slideUp('slow');
			$menuButtonBars.removeClass('button_open')
			$menuButtonBars.addClass('button_closed')
			$wrapper.removeClass('open_wrapper')
			$wrapper.addClass("closed_wra")		}
	});





}






