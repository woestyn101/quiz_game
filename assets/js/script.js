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
var question1 =  "Arrays in Javasript can be used to store _______."
var question1Options = ["numbers and strings", "others arrays", "booleans", "all of the above."]

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
mainSection.appendChild(quizExplain);
mainSection.appendChild(button);
}

init();