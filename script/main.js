$(document).ready(function(){

toggle_nav_container();
toggle_nav_zindex();


});



var toggle_nav_container = function () {



	var 	$toggleButton = $('#toggle_m_nav');
			$navContainer = $('#m_nav_container');
			$menuButton = $('#m_nav_menu')
			$menuButtonBars = $('.m_nav_ham');
			$wrapper = $('#wrapper');

	// toggle the container on click of button (can be remapped to $menuButton)

	$toggleButton.on("click", function(){

		// declare a local variable for the window width
		var $viewportWidth = $(window).width();

		// if statement to determine whether the nav container is already toggled or not

		if($navContainer.is(':hidden'))
		{	
			$wrapper.removeClass('closed_wrapper')
			$wrapper.addClass("open_wrapper")
			$navContainer.slideDown(1500).addClass('container_open').delay(2000).css("z-index", "1");
			$menuButtonBars.removeClass('button_closed')
			$menuButtonBars.addClass('button_open')

		}
		else
		{
			$navContainer.css("z-index", "0").removeClass('container_open').slideUp(1500)
			$menuButtonBars.removeClass('button_open')
			$menuButtonBars.addClass('button_closed')
			$wrapper.removeClass('open_wrapper')
			$wrapper.addClass("closed_wrapper")		}
	});



}









