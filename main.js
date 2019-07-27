function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var myQuestions = [
            {
                question: "(1) Who founded Singapore in 1819?",
                answers: {
                    a: 'Sir Thomas Stamford Raffles',
                    b: 'John Crawfurd',
                    c: 'William Farquhar',
                    d: 'Sang Nila Utama'
                },
                correctAnswer: 'a'
            },
            {
                question: "(2) When did Singapore gain independence?",
                answers: {
                    a: '2015',
                    b: '1942',
                    c: '1965',
                    d: '1819'
                },
                correctAnswer: 'c'
            },
            {
                question: "(3) Where is Sang Nila Utama from?",
                answers: {
                    a: 'Lion City',
                    b: 'Malaysia',
                    c: 'Singapore',
                    d: 'Indonesia'
                },
                correctAnswer: 'd'
            },
            {
                question: "(4) What is the official language(s) of Singapore?",
                answers: {
                    a: 'English',
                    b: 'Malay',
                    c: 'Tamil',
                    d: 'Mandarin',
                    e: 'All of the above'
                },
                correctAnswer: 'e'
            },
        ];
       
	var output = [window.alert];
    var answers;

    for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

    


	
	

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        // gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;	
	}	

}



var points = 0;

function calculatePoints() {
	points+=1
}

function showPoints() {
	window.alert("You got: " + points + " points! Thank you for playing.")
}



