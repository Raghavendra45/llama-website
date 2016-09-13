var txtName = new String();
var loadName = new String();
var images = ["llama3.jpg","llama2.jpg","llama1.jpg","llama4.jpg"];
var images1 = ["robots1.jpg","robots2.jpg","robots3.jpg","robots.jpg"];
var images2 = ["Super_LLama1.png","Super_LLama2.jpg","Super_LLama.jpg"];

var x = 0, y = 0, z = 0;

function nameSubmit(){
	txtName = document.getElementById("txtName");
}

function clear(){
	document.getElementById("txtName").value = "";
	document.getElementsByName("choice").value = "";
}

function opinion(){
	var opinion = document.getElementById("txtName");
	var choice = document.getElementsByName("choice");
	for (i = 0; i < choice.length; i++){
		currentChoice = choice[i];
		if (currentChoice.checked){
			var selectedChoice = currentChoice.value;
		} // end if
	} // end for
	var output = document.getElementById("output");
	loadName = opinion.value;
	if(loadName == undefined)
	{
		var response = "<p> >>> Please press Submit button after entering your name";
	}
	else
	{
		if(selectedChoice == "Yes")
		{
			var response = "<p> >>> No need to worry " + loadName + ", Super Llama is here for the rescue.";
		}
		else
		{
			var response = "<p> >>> Well " + loadName + ", you are brave. But do visit the Super Llama page.";
		}
	}
	output.innerHTML = response;

} // end function


function rating(){
	var choice = document.getElementsByName("choice");
	for (i = 0; i < choice.length; i++){
		currentChoice = choice[i];
		if (currentChoice.checked){
			var selectedChoice = currentChoice.value;
		} // end if
	} // end for
	var outputData = document.getElementById("outputData");
	var response;
	
	switch(selectedChoice){
		case "1":
			response = "<p> >>> Oh thats bad";
			break; 
		case "2":
			response = "<p> >>> Hmm, poor Super Llama";
			break; 
		case "3":
			response = "<p> >>> Cool !!!";
			break; 
		case "4":
			response = "<p> >>> Great, Super llama would be rejoiced to hear that !";
			break; 
		case "5":
			response = "<p> >>> Wow, Super llama would be delighted to know that !";
			break;
		default:
			response = "<p> >>> You did not provide any ratings."; 
			break;
	}

	outputData.innerHTML = response;

} // end function

function changeImage(){
	var img = document.getElementById("mid1");
	img.src = images[x];
	x++;
	
	if(x > 3){
		x = 0;
	}
}

function changeImage1(){
	var img = document.getElementById("mid1");
	img.src = images1[y];
	y++;
	
	if(y > 3){
		y = 0;
	}
}

function changeImage2(){
	var img = document.getElementById("mid1");
	img.src = images2[z];
	z++;
	
	if(z > 2){
		z = 0;
	}
}
