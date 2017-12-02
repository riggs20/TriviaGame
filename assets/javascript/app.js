$(document).ready(function() {

	// Variable to hold the start of timer
	var count = 30;

	// Variables for game-over
	var correctCount = 0;
	var incorrectCount = 0;
	var unansweredCount = 0;

	// Function for timer to run
	function timer() {
		// Countdown for timer
		count = count-1;

		// Stop timer when count is less than or equal to 0
		if (count <= 0) {
			clearInterval(count);
			return;
		};

		// Display timer
		$("#timer").html(count + " seconds");
	};

	// Hide contents at the beginning of the game
		$("#time-remaining").hide();
		$(".form-group").hide();
		$("#game-over").hide();
		$("#done-btn").hide();

	

	// Click start button
	$("#start-btn").on("click", function() {
		// Hide the start button
		$("#start-btn").hide();

		// Show time-remaining, form, and done button
		$("#time-remaining").show();
		$(".form-group").show();
		$("#done-btn").show();
		
	// Variable to setInterval of timer
	var counter = setInterval(timer, 1000);

	});

	// Click done button
	$("#done-btn").on("click", function() {
		// Hide time-remaining, form, and done button
		$("#time-remaining").hide();
		$(".form-group").hide();
		$("#done-btn").hide();

		// Show game over results
		$("#game-over").show();

		// Variable for correct answers
		var correctAnswers = $("#correct-answers").html("Correct Answers: " + correctCount);

		// Variable for incorrect answers
		var incorrectAnswers = $("#incorrect-answers").html("Incorrect Answers: " + incorrectCount);

		// Variable for unanswered
		var unansweredAnswers = $("#unanswered").html("Unanswered: " + unansweredCount);

	});

		// Calculate answers
		$("input").change(function() {
			correctCount = $(".correct:checked").length;
			incorrectCount = $(".incorrect:checked").length;
			unansweredCount = (10-(correctCount+incorrectCount));
		});




});