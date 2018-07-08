// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(700, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13) {
		// grab input whe enter is hit
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add it
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText+ "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});













	// //if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// 	//turn it black
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// });
	// }
	// else {
	// 	// turn it gray
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-Through"
	// });
	// }	