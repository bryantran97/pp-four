var focusedAbout = false; /* To know when button is focused */
var focusedProjects = false; /* To know when button is focused */

/* This is for the About button */
$('#about').click(function(){

	// This if statement allows to see which part they are focused on
	if(focusedAbout == true){
		$('#about-content').removeClass('show');
		$(this).text("About");
		focusedAbout = false;
	} else {
		$('#about-content').addClass('show').addClass('animated bounceInDown');
		$(this).text("[About]");
		focusedAbout = true;
	}
});

$('#resume').click(function(){
	alert("I am not putting up my resume yet, still need to update. Come back next time!");
});


/* This is for the projects button */
$('#projects').click(function(){
	$('#projects-content').toggleClass('show').addClass('animated bounceInDown');

		// This if statement allows to see which part they are focused on
	if(focusedProjects == true){
		$(this).text("Projects");
		focusedProjects = false;
	} else {
		$(this).text("[Projects]");
		focusedProjects = true;
	}
});