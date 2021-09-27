//the loader to stop
$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);

	});

	//for img in the viewport to not overlap eachother
		$(".items").isotope( {
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}

	});

});


//for img slides appears
$(document).ready(function() {

	$('#slides').superslides({ // codes that activated the slides -
	animation: 'fade',
	play: 5000, 
	pagination: false //rid of the pagination
	});

	//title typed speed
	var typed = new Typed(".typed", {
		strings: ["Freelancer", "Web and Mobile Application Developer", "Senior Student", "Illustrator"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:2
	        },
	        768:{
	            items:3
	        },	        
	        938:{
	            items:4
	        } 
	    }
	});

	//variable to our codes below
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinish = false;


   $(window).scroll(function() {

   	//console.log(window.pageYOffset); is greate to know how long you are scrolling the window

   	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
   		
   		$('.chart').easyPieChart({
            easing: 'easeInOut', 
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });	

   		}

   });

//countUp codes 
if(!countUpFinish && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
	

	$('.counter').each(function() {
		var element = $(this);
		var endVal = parseInt(element.text());
		element.countup(endVal);
	});
		countUpFinish = true;
	}

	$("[data-fancybox]").fancybox();


	//selection id of the element of filters of the href
	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current"); //inside of event (clicked) that are at current
	
		var selector = $(this).attr("data-filter");

		$(".items").isotope( {
		filter: selector,
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}

		});

		return false;

	});

	//nagivation bar will never be smooth
	$("#navigation li a").click(function(e) {
		e.preventDefault();
		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")

	});


	//nagivation bar will never be constant or asigned
	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");
		if($(window).scrollTop() >= navTop) {
		body.css("padding-top", nav.outerHeight() + "px");
		body.addClass("fixedNav");
		}
		else {
			body.removeClass("fixedNav");
		}
	}

});

/* Salman's codes
//the loader to stop
$(window).on("load", function() {

	$(".loader .inner").fadeOut(400, function(){
		$(".loader").fadeOut(550);

	});

	//for img in the viewport to not overlap eachother
		$(".items").isotope( {
		filter: '*',
		animationOptions: {
			duration: 1400,
			easing: 'linear',
			queue: false
		}

	});

});


//for img slides appears
$(document).ready(function() {

	$('#slides').superslides({ // codes that activated the slides -
	animation: 'fade',
	play: 2000,
	pagination: false //rid of the pagination
	});

	//title typed speed
	var typed = new Typed(".typed", {
		strings: ["Hosting Epic Events | Driven for Charity | Contribute to an Amazing Cause"],
		typeSpeed: 90,
		loop: true,
		startDelay: 900,
		showCursor: false
	});

});

//for img slides2 appears
$(document).ready(function() {

	$('#slides2').superslides({ // codes that activated the slides -
	animation: 'fade',
	play: 2000,
	pagination: false //rid of the pagination
	});

	var slide = new Slide("", {
		strings: [""],
		typeSpeed: 90,
		loop: true,
		startDelay: 900,
		showCursor: false
	});

});
function myFunction() {
	var x = document.getElementById("myDIV");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  */