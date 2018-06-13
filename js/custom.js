(function () {

// Custom Slider
function slider(){ 
	//getting and setting width, height and length  
	var slideCount = $('#slider > ul > li').length;
	var slideWidth = $('#slider > ul > li').width();
	var slideHeight = $('#slider > ul > li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	// assigning eachtime to respective element
	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider > ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

	// prepend the last item to first item
	$('#slider > ul > li:last-child').prependTo('#slider > ul');

	//slide left click function
    function moveLeft() {
        $('#slider > ul').animate({
            left: + slideWidth
        }, 300, function () {
            $('#slider > ul > li:last-child').prependTo('#slider > ul');
            $('#slider > ul').css('left', '');
        });
    };

    //slide left click function
    function moveRight() {
        $('#slider > ul').animate({
            left: - slideWidth
        }, 300, function () {
            $('#slider > ul > li:first-child').appendTo('#slider > ul');
            $('#slider > ul').css('left', '');
        });
    };

    //slide left click
    $('#slider a.control_prev').click(function () {
        moveLeft();
    });

    //slide right click
    $('#slider  a.control_next').click(function () {
        moveRight();
    });
}
//call the slider function on load
slider();

	// show input on search icon click
	$('.search-icon').on('click', function(){
		$('.search-inp').addClass('slide-left');
		$('.navbar nav, .search-inp').addClass('transition');
		if ($(window).width() > 991) {
			$('.navbar nav').css('margin-right','140px');
		}
		else {
		   $('.navbar nav').css('margin-right','0px');
		}
	});

	// hide input on close button click
	$('.close-search').on('click',function(){
  		$('.search-inp').removeClass('slide-left');
		$('.navbar nav').css('margin-right','0px');
		$('.navbar nav, .search-inp').addClass('transition');
    });

	// show and hide product menu on arrow click
    $('#close_pm').on('click',function(){
		$('#product_menu').toggleClass('closed');
		$('#close_pm i').toggleClass('fa-chevron-down fa-chevron-up');
    });

    // show and hide menu in small screen
	$('#xs-menu').on('click',function(){
		$('.navbar nav').toggleClass('show-xs-menu');
		$('#xs-menu i').toggleClass('fa-close fa-bars');
    });

}());
