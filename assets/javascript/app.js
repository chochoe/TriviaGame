$(function(){
	var timeLeft = 30;
	var correct = 0;
	var incorrect = 0;
	var noAnswer = 5;
	var userGuessText = $(this).text();
	var questions = [
	{
		question: "Who created this game?",
		answer: "",
		choices: ['David', 'Tom', "Emery", 'Anders']
	},
	{
		question: "Which programming language is not what we're learning now?",
		answer: "",
		choices: ['HTML', 'CSS', 'JavaScript', 'C++']
	},
	{
		question: "Which week is this homework assignment for?",		
		answer: "",
		choices: ['Week 1', 'Week 3', 'Week 6', 'Week 10']
	},
	{
		question: "About how many hours does it take this game creator to get to class from home?",
		answer: "",
		choices: ['1/2', '1', '1 1/2', '2']
	},
	{
		question: "Which grocery store is closest to the Golden Bear Center?",
		answer: "",
		choices: ["Trader Joe's", 'Safeway', 'Whole Foods', 'Berkeley Bowl']
	}
	];
    var answers = ["Emery", "C++", "Week 3", "1", "Trader Joe's"];
	document.getElementById("done").disabled = true;
	$("#start").on("click", function(event) {
		// add countdown timer
		event.preventDefault;
		document.getElementById("done").disabled = false;
		document.getElementById("start").disabled = true;
		questions.forEach(function(element,index){
			var q1 = element.question;
        	var $question = $('<div class="question">').attr("data-answer", index).append("<p>" + q1 + "</p>");
        	element.choices.forEach(function(choice) {
        		$('<button>').text(choice).appendTo($question)
        		.on("click", function() {
        			this.diasbled = true;
        			$('#userGuess').html(userGuessText);
        			element.selected = choice;
        			if(choice == answers[($(this).parent().attr('data-answer'))]){
        				correct++;
        				noAnswer--;
        				alert("Answer chosen. On to the next question. Click Done after the final question.");
        			} else if (choice != answers[($(this).parent().attr('data-answer'))]){
        				incorrect++;
        				noAnswer--;
        				alert("Answer chosen. On to the next question. Click Done after the final question.");
        			};
        		});
        	});
        	$('#game').append($question);
        });
	});
	$("#done").on("click", function(event) {
		var html =
			"<p>Final " + "Score!</p>" +
			"<p>Correct: " + correct + "</p>" +
			"<p>Incorrect: " + incorrect + "</p>" +
			"<p>No " + "Answer: " + noAnswer + "</p>";
		document.querySelector("#done").innerHTML = html;
	});
});