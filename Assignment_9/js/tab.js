

$(document).ready(function(){

	$("#resources").show();

	
	$(".tabBtn").click(function(){
		var current = $(this).attr("href");

		$(".tabContent").hide();
		$(".tabBtn").removeClass("active2");
		
		$(this).addClass("active2");
		$(current).show();
	});
});