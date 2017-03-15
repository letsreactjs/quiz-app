let currentQuestionNo = 1;
let totalQuestions = Object.keys(questions).length;
let selectedAnswer = null;
let currentQuestion = questions[currentQuestionNo];
let correctAnswersSelected = [];
let wrongAnswersSelected = [];
let questionsBox = document.getElementById("questions-box");

generateQuestion();

function generateQuestion(){
  let options = "";
  currentQuestion.options.forEach(function(opt){
    options += `<input onchange="optionOnSelect('${opt}')" type="radio" name="currentQuestion" value="${opt}"/> ${opt}<br/>`;
  });
  questionsBox.innerHTML = `
    <article id="question">
      <div class="code-box">${htmlCode}</div><br/>
      <h3>${currentQuestion.question}</h3>
      <form id="options-box">
        ${options}
      </form>
      <div id="call-to-action">
        <button onclick="buttonOnClick()" id="button" type="button" disabled="true">Next</button>
        <div id="error-box">
          Some error here
        </div>
      </div>
    </article>
  `;
}

function generateResults(){
  const result = Math.round((correctAnswersSelected.length/totalQuestions)*100, 10);
  questionsBox.innerHTML = `
    <div class="${result < 50 ? 'danger' : 'success'}" id="results">
      <h3>Results</h3>
      <p>${result}%</p>
    </div>
  `;
}

function optionOnSelect(option){
  selectedAnswer = option;
  document.getElementById("button").disabled = false;
}

function buttonOnClick(){
  if(selectedAnswer === currentQuestion.answer){
    correctAnswersSelected.push(currentQuestionNo);
  }else{
    wrongAnswersSelected.push(currentQuestionNo);
  }
  if(currentQuestionNo < totalQuestions){
    currentQuestionNo++;
    currentQuestion = questions[currentQuestionNo];
    generateQuestion();
  }else{
    generateResults();
  }
}
