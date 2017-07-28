// Checking off items click function (quicker version)
// NOTE: Use the .on("click"..) because it takes care of event listeners for FUTURE li's posted
// You put in UL for the selector because it exists, then specify a click, and LI are the actions you want it to be focused on
$("ul").on("click", "li", function(event){
	$(this).toggleClass("completed");

	// CHECKING OFF ITEMS (LONGER VERSION; EDITED)
	// If to-do item is gray
// 	// NOTE: When trying to compare colors from CSS, make sure you use the RGB value
// 	if($(this).css("color") === "rgb(128, 128, 128)"){ // turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else { // Else
// 		$(this).css({ // turn it gray with strike-through line
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
});

// Click on X to delete To-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){ // This will remove the PARENT class of THIS(span) or the LI in this case
		$(this).remove();
	});
	event.stopPropagation(); // will stop events from bubbling; It'll only take effect on span
});

$("input[type='text']").keypress(function(event){
	// This grabs new TODO text from input
	var todoText = $(this).val();
	if(event.which === 13 && todoText != ""){ // 'which' responds to WHICH character code of the key press
		$(this).val(""); // empties the input
		// Append new LI item to the UL
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Fades the INPUT BOX IN and OUT
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});