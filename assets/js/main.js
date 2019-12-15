(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	// Slicknav
		$('.main-menu').slicknav({
	        closeOnClick:false,
	        appendTo:'.mobile-menu'
	    });

	    // Slick Slider
	    $('.slider-for').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        fade: true,
	        asNavFor: '.slider-nav'
	    });

	    $('.slider-nav').slick({
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        asNavFor: '.slider-for',
	        dots: false,
	        arrows: false,
	        centerMode: true,
	        focusOnSelect: true,
	        centerPadding: '0px',
	        responsive: [
	            {
	                breakpoint: 580,
	                settings: {
	                    slidesToShow: 3,
	                }
	            }
	        ]
	    });

	    //magnific popup video active.
	    $('.video-link').magnificPopup({
            type: 'video'
        });

	    // Header search
	    $(".header-search a").on('click', function(){
            $(".search-form").toggleClass("animated slideInUp");
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	