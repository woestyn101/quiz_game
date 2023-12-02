//get html id's
var questionBox = document.querySelector("questionBox");
var mainSection = document.querySelector("main");

var body = document.body;

//set html page variable
var theTime = document.querySelector("#time");

var quizTimer = 60;
//console.log(quizTimer);
//myTime.textContent = "marius";

//declaring array answers
var question1 =  "How do you create a function in javascript?"
var question1Options = ["function = myFunction()", "function: myFunction", "function myFunction()", "function = myFunction{}"]
var question2 =  "Inside which element do we put the Javascript"
var question2Options = ["<javascript>", "<scripting", "<script>", "<js>"]
var question3 =  "What is the correct syntax for referring to an external javasript file?"
var question3Options = ["<script href='xxx.js'>", "<script name='xxx.js'", "<script meta='xxx.js'", "<script src='xxx.js'"]
var question4 =  "How do you write 'Hello World in an alert box?"
var question4Options = ["mgsBox('Hellow World');", "msg('Hellow World');", "alert('Hellow World');", "alertBox('Hellow World');"]

var myTimer = setInterval(countDown, 1000);


function countDown() {
    quizTimer--;
    theTime.textContent = quizTimer;
    if (quizTimer == 0){
        clearInterval(myTimer);
    }    
}

var quizHeading = document.createElement("h1");
quizHeading.textContent = "Coding Quiz Challenge";
var quizExplain = document.createElement("h2");
quizExplain.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"


var button = document.createElement("button")
button.textContent = "Start Quiz";

button.addEventListener("click", firstQuestion);

function firstQuestion (){
    quizHeading.textContent = "";
    quizExplain.textContent = question1;
    button.setAttribute("style", "display:none")
}

function init(){   
body.appendChild(mainSection);
mainSection.appendChild(quizHeading);
quizHeading.setAttribute("style", "margin-bottom:10px")
mainSection.appendChild(quizExplain);
mainSection.appendChild(button);
}

init();