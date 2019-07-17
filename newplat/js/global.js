(function($) {
"use strict";

$(document).ready(function()
{
	// Close sidenav menu on body click
	$("body").on("click", function(e)
	{
		// Check if click was triggered on or within #sidenav menu
		if ($(e.target).closest("#sidenav").length > 0)
		{
			// return false;
		}
		else
		{
			if ($("#sidenav").css("right") == "0px")
			{
				closeNav();
			}
		}
	});

	// Homepage slider
	var $item 		= $(".carousel .item");
	var $wHeight 	= $(window).height();

	$item.eq(0).addClass("active");
	$item.height($wHeight);
	$item.addClass("full-screen-carousel");

	$(".carousel img").each(function()
	{
		var $src = $(this).attr("src");

		$(this).parent().css({
			"background-image" : "url(" + $src + ")"
		});

		$(this).remove();
	});

	$(window).on("resize", function()
	{
		$wHeight = $(window).height();
		$item.height($wHeight);
	});

	$(".carousel").carousel({
		interval: 6000,
		pause: "false"
	});

});

})(jQuery);

// Sidenav menu
function openNav()
{
	$("#sidenav").css("right", "0");
}

function closeNav()
{
	$("#sidenav").css("right", "-250px");
}

// Search overlay
function openSearch()
{
	$("#searchoverlay").css("width", "100%");

	setTimeout(function() {
		$(".search-close-btn").show();
	}, 500);
}

function closeSearch()
{
	$(".search-close-btn").hide();
	$("#searchoverlay").css("width", "0%");
}
