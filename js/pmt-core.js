// JavaScript Document
/**********************************************************************************************************************/
/*
********
********
********
*/
/* > NOTES: START
***********************************************************************************************************************/



/* NOTES: END
***********************************************************************************************************************/
/*
********
********
********
*/
/* > STRICT PANELS: START
***********************************************************************************************************************/

$(document).ready(function(){

	$('.f-pmt-bs-panel-group--strict > .panel > .panel-heading').on('click',function(e) {

		if($(this).parents('.panel').children('.collapse').hasClass('in')){

			e.stopPropagation();
		}
	});

	$('.panel *').on('hide.bs.collapse', function () {
		//when closing the element, if it has collapse class, set the height to 0%
		if($(this).hasClass('in')) {
			$(this).css('display', 'none');
			$(this).parent().css("height", "auto");
			
			
			//$(this).height('0% !important');
			$(this).height('0%');
			
			
			//$(this).children(":first").height('0% !important');
			$(this).children(":first").height('0%');
			
			
			
			$(this).children().css('display', 'none');
			
			
		}
	});

	$('.panel *').on('show.bs.collapse', function () {
		//when opening the element, if it has collapse class, set the height to 100%
		if( $(this).hasClass('collapse')) {
			$(this).css('display', 'block');
			$(this).children(":first").css('display', 'block');
			

			$(this).height('100%');
			$(this).parent().height('100%');
			$(this).children(":first").height('100%');

		}
	});
	
});


/* STRICT PANELS: END
***********************************************************************************************************************/
/*
********
********
********
*/
/* > MAIN NAV ON MOBILE: START
***********************************************************************************************************************/

$(document).ready(function(){

	$('.f-pmt-show-page-heading-1').on("click", function() {
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-1-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
	});

	
	
	$('.f-pmt-show-page-heading-2').on("click", function() {
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-2-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
	});

	
	
	
	$('.f-pmt-show-page-heading-3').on("click", function() {
		
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-3-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
		
	});
	
	$('.f-pmt-show-page-heading-4').on("click", function() {
		
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-4-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
		
	});
	
	$('.f-pmt-show-page-heading-5').on("click", function() {
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-5-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
			
	});
	
	
	
	$('.f-pmt-show-page-heading-6').on("click", function() {
		
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-6-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
		
	});
	
	
	$('.f-pmt-show-page-heading-7').on("click", function() {
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-7-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
		
	});
	
	
	$('.f-pmt-show-page-heading-8').on("click", function() {
		
		for ( i = 1; i < 9; i++ ) {	
			var pageHeadingID = "#page-" + i + "-heading-id";
			$(pageHeadingID).addClass("hidden");
		}
		
		$("#page-8-heading-id").removeClass("hidden");
		$("#pmt-main-nav-collapser-id").removeClass("in");
	});

});

/* MAIN NAV ON MOBILE: END
***********************************************************************************************************************/
/*
********
********
********
*/
/* > HIDE AND SHOW STUFF: START
***********************************************************************************************************************/

/* Show Stuff */
function showBlock ( thingToShowID ) {
	$(thingToShowID).css('display', 'block');
	$(thingToShowID).removeClass("hidden");
}

function showInlineBlock ( thingToShowID ) {
	$(thingToShowID).css('display', 'inline-block');
	$(thingToShowID).removeClass("hidden");
}


/* Hide Stuff */
function hide ( thingToHideID ) {
	$(thingToHideID).css('display', 'none');
}


/* HIDE AND SHOW STUFF: END
***********************************************************************************************************************/





	