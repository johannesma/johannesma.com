/* Author: Johannes Ma*/
jQuery(function(){
//open rel=external in new window
$('a[rel=external]').attr('target', '_blank');

//Steps scroll to			
$('.scrollsection').click(function() {
	 var elementClicked = $(this).attr("href");
	 var destination = $(elementClicked).offset().top;
	 $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 1000 );
	 return false;
});
			
//work thumbnail hover
$('article.block img').css('opacity', '0.55');
	// hover opacity
	$('article.block').hover(
		function() {
			$(this).css("background-color", "#f9f9f9").addClass('on');
			$(this).stop().find('img').animate({ opacity: 1.0 }, 300).dequeue();
		},
		function() {
			$(this).css("background-color", 'transparent').removeClass('on');;
			$(this).stop().find('img').animate({ opacity: 0.55 }, "slow").dequeue();
	});
});//end




















