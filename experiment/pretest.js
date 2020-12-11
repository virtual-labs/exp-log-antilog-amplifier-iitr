/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "A log amplifier may use the __________ junction of a BJT in the feedback loop.",  ///// Write the question inside double quotes
      answers: {
        a: "Base-collector",                  ///// Write the option 1 inside double quotes
        b: "base-emitter",                  ///// Write the option 2 inside double quotes
        c: "emitter-collector",                  ///// Write the option 3 inside double quotes
        d: "emitter-ground"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "In logarithmic signal compression __________",  ///// Write the question inside double quotes
      answers: {
        a: "large and small voltages are compressed equally.",                  ///// Write the option 1 inside double quotes
        b: "large voltages are compressed more than small voltages.",                  ///// Write the option 2 inside double quotes
        c: "large voltages are compressed less than smaller voltages.",                  ///// Write the option 3 inside double quotes
        d: "none of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
     question: "The log of a number is the _________.",  ///// Write the question inside double quotes
      answers: {
        a: "base to which the power must be raised to get that number.",                  ///// Write the option 1 inside double quotes
        b: "power to which the base must be raised to get that number.",                  ///// Write the option 2 inside double quotes
        c: "base of that number.",                  ///// Write the option 3 inside double quotes
        d: "power of that number."                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
     question: "A log amplifier has _____ in the feedback loop.",  ///// Write the question inside double quotes
      answers: {
        a: "a diode",                  ///// Write the option 1 inside double quotes
        b: "a BJT",                  ///// Write the option 2 inside double quotes
        c: "a resistor",                  ///// Write the option 3 inside double quotes
        d: "either a diode or a BJT"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "How to provide saturation current and temperature compensation in log-amp? ",  ///// Write the question inside double quotes
      answers: {
        a: "Applying reference voltage alone to two different log-amps",                  ///// Write the option 1 inside double quotes
        b: "Applying input and reference voltage to same log-amps",                  ///// Write the option 2 inside double quotes
        c: "Applying input and reference voltage to separate log-amps",                  ///// Write the option 3 inside double quotes
        d: "None of the mentioned"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////