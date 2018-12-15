//global variables
var lost = 0;
var win = 0;
var SweetsBudget;
var Total = 0;


var BeginGame = function() {

	$(".Treats").empty();

	var images = [
			'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/chocolate-chip-cookie-dough-brownie-19.jpg', 
			'https://i.pinimg.com/474x/e4/56/17/e45617f9afaed69b736a1762d10c7fcf--cream-cheese-filling-cream-cheeses.jpg', 
			'https://littledebbie.com/images/content/allcategories_pastries_old-qh40lr.png', 
			'http://hamiltonfarmersmarket.ca/public/uploads/thumbnail/vendor_latinfoods_gallery1.jpg'];
		
	//create a random to appear for the Computer-Random-Number (Sweets Budget) 
	SweetsBudget = Math.floor(Math.random() * 101 ) + 19; 
    //overwrite the text to desired one
	$("#myBudget").html('Sweets Budget: ' + SweetsBudget);
	$("#Total").html("Total Spendings: " + Total);
	
	//create a for loop for your 4 treats and generate a random number and random image from the images above
	for(var i = 0; i < 4; i++){
		var random = Math.floor(Math.random() * 11) + 1;
		var treat = $("<div>");
		//create a class to 
			treat.attr({
				"class": 'treat',
				"random": random
			});
			treat.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
			});

		$(".Treats").append(treat);

	}

}

BeginGame();
// click function for the treats
$(document).on('click', ".treat", function() {

	var number = parseInt($(this).attr('random'));

	Total += number;

	$("#Total").html("Total Spendings: " + Total);
	
	//win scenerio
	//win if user matches the Budget
	if(Total === SweetsBudget){
		alert("You Win!");
		//add one to the win round
		win++;
		//start each time with 0
		Total = 0;
		//print "You win" new value from above
		$("#win").html("You win: " + win);
		BeginGame();

	} 
	//lose scenerio
    //lose if user's Total spendings exceed the Budget
	else if(Total > SweetsBudget){
		//create a pop up for "you lost"
		alert("You Lost!");
		//add one to the lost round
		lost++;
		//start each time with 0
		Total = 0;
		$("#lost").html("You lost: " + lost);
		BeginGame();
	
    }
    
});