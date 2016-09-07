fucntion handleEvent(e) {
	var target = $(e.target);
	var type = e.type;
	
	if (type == "mouseover" || type == "mouseout") {
		target.toggleClass("tabStrip-tab-hover");
	} else if (type == "click") {
		target.addClass("tabStrip-tab-click");
		
		var num = target.attr("data-tab-number");
		showDescription(num);
	}
}
function showDescription(num) {
	var text = "Description for Tab " + num;
	
	$("#descContainter").text(text);
}

$(".tabStrip > div").on("mouseover mouseout click", handleEvent);
