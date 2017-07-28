var focusedAbout = false; /* To know when button is focused */
var focusedProjects = false; /* To know when button is focused */


/* This is for the About button */
$('#about').click(function(){
	$('#about-content').toggleClass('show').addClass('animated bounceInDown');
	

	// This if statement allows to see which part they are focused on
	if(focusedAbout == true){
		$(this).text("About");
		focusedAbout = false;
	} else {
		$(this).text("[About]");
		focusedAbout = true;
	}
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