
//Initial count variables.
var nameCount = 0;
var destinationCount = 0;
var firstTrainCount = 0;
var frequencyCount = 0;

//These are the arrays to store the data.
var nameArray = [];
var destinationArray = [];
var firstTrainArray = [];
var frequencyArray = [];

nameArray = JSON.parse(localStorage.getItem("nameList"));
localStorage.setItem("nameList", JSON.stringify(nameArray)
	);

//When the submit button is clicked...
$("#submit").on("click", function(event){
	event.preventDefault();


	//Get the value of each input.
	var submitName = $("#formGroupNameInput").val().trim();
	var submitDestination = $("#formGroupDestinationInput").val().trim();
	var submitFirstTrain = $("#formGroupFirstTrainInput").val();
	var submitFrequency = $("#formGroupFrequencyInput").val();

	JSON.stringify(submitFirstTrain);
	JSON.stringify(submitFrequency);


	console.log(submitName);
	console.log(submitDestination);
	console.log(submitFirstTrain);
	console.log(submitFrequency);

	//Create p tags for each value.
	var nameDiv = $("<p>");
	var destinationDiv = $("<p>");
	var firstTrainDiv = $("<p>");
	var frequencyDiv = $("<p>");

		//Give each variable above an ID that reflects it's respective counter.
		nameDiv.attr("id", "name-" + nameCount);
		destinationDiv.attr("id", "name-" + destinationCount);
		firstTrainDiv.attr("id", "name-" + firstTrainCount);
		frequencyDiv.attr("id", "name-" + frequencyCount);

	

	//Append the values to each <p> element.
	nameDiv.append(" " + submitName);
	destinationDiv.append(" " + submitDestination);
	firstTrainDiv.append(" " + submitFirstTrain);
	frequencyDiv.append(" " + submitFrequency);


	$(".train-field").append(nameDiv);
	$(".destination-field").append(destinationDiv);

	console.log(nameDiv);
	console.log(destinationDiv);
	console.log(firstTrainDiv);
	console.log(frequencyDiv);

	//Append values to the document.
	//$("#added-fields").append(nameDiv, destinationDiv, firstTrainDiv, frequencyDiv);

	//Clear the textbox when done.
	$("#formGroupNameInput").val("");
	$("#formGroupDestinationInput").val("");
	$("#formGroupFirstTrainInput").val("");
	$("#formGroupFrequencyInput").val("");

	//Increase all of the counters by 1.
	nameCount++;
	destinationCount++;
	firstTrainCount++;
	frequencyCount++;

	console.log(nameCount);
	console.log(destinationCount);
	console.log(firstTrainCount);
	console.log(frequencyCount);

});
