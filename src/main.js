$(function(){
	// init
	$("#hitarea").click(function(){
		// click to jump to p2
		//alert("click");
		$("#page_container").show();
		$("#p2").animate({
			left:0
		}, 800, "easeInOutCubic", function(){
			// function complete
			$(".page-content").addClass("p2_content");
		});

	});

	$("#hitarea2").click(function(){
		// go back to p1
		$("#p2").animate({
			left:375
		}, 800, "easeInOutCubic", function(){
			// function complete
			$("#page_container").hide();
			$(".page-content").removeClass("p2_content");
		});
	});

});