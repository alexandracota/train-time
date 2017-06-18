
 

//Initial count variables.
var nameCount = 0;
var destinationCount = 0;
var firstTrainCount = 0;
var frequencyCount = 0;


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


	//Get the value from firstTrain and frequency and calculate how many trains have passed.
	firstTrainConverted = moment(submitFirstTrain, "hh:mm").subtract(1, "years");
	currentTime = moment();
	timeDifference = moment().diff(moment(firstTrainConverted), "minutes");
	trainRemainder = timeDifference % submitFrequency;
	minutesUntilNext = submitFrequency - trainRemainder;
	nextTrain = moment().add(minutesUntilNext, "minutes");
	nextTrainFormat = moment(nextTrain).format("hh:mm");

	// console.log(firstTrainConverted);
	// console.log(currentTime);
	// console.log(timeDifference);
	// console.log(trainRemainder);
	// console.log(minutesUntilNext);
	// console.log(nextTrain);
	// console.log(nextTrainFormat);


	//Stringify numerical values.
	JSON.stringify(submitFirstTrain);
	JSON.stringify(submitFrequency);

	// console.log(submitName);
	// console.log(submitDestination);
	// console.log(submitFirstTrain);
	// console.log(submitFrequency);


	//Object to hold all values being pushed to server.
	var pushValues = {
		"submitName": submitName,
		"submitDestination": submitDestination,
		"submitFrequency": submitFrequency,
		"nextTrainFormat": nextTrainFormat,
		"minutesUntilNext": minutesUntilNext
	};

	//Set the values in the server.
	database.ref().push({
		"name": pushValues.submitName,
		"dest":  pushValues.submitDestination,
		"freq": pushValues.submitFrequency,
		"next": pushValues.submit
			});

	//console.log(pushValues);




database.ref().on("child_added", function(snapshot) {
	var name = snapshot.val().name;
	var destination = snapshot.val().dest;
	console.log(name);
});



	//Create p tags for each value.
	var nameDiv = $("<p>");
	var destinationDiv = $("<p>");
	var frequencyDiv = $("<p>");

	//Give each variable above an ID that reflects it's respective counter.
	nameDiv.attr("id", "name-" + nameCount);
	destinationDiv.attr("id", "name-" + destinationCount);
	frequencyDiv.attr("id", "name-" + frequencyCount);

	
	//Append the values to each <p> element.
	nameDiv.append(" " + submitName);
	destinationDiv.append(" " + submitDestination);
	frequencyDiv.append(" " + submitFrequency);

	//Append fields to document.
	$(".train-field").append(nameDiv);
	$(".destination-field").append(destinationDiv);
	$(".frequency-field").append(frequencyDiv);

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

});











