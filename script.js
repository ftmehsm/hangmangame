const words= ["love" , "Hate" , "happy new year" , "like" ,"money" , "Be kind!" , "seccessful"];

let randomitem = "";
let clicked = [];
let result="";
let mistakes = 0;

function chooserandom(){
    randomitem = words[Math.floor(Math.random() * words.length)];
    document.querySelector(".keys").addEventListener("click" , btnHandler)
    window.addEventListener("keydown" , keyhandler)
}

function setUnderScores(){
  let spiltedWord = randomitem.split("");
  let mappedWord = spiltedWord.map(letter => (clicked.indexOf(letter)) >=0 ? letter : "_");
  result = mappedWord.join("");
  document.querySelector(".clue").innerHTML= `<p>${result}<P>`
}

function winCheck(){
  if(randomitem === result){
    document.querySelector(".gameover").querySelector("p").style.display = "block";
    document.querySelector(".hangmanimg").querySelector("img").src= "images/winner.png"
  }
}


function loseCheck(){
  if(mistakes === 6){
    document.querySelector(".gameover").querySelector("p").style.display = "block";
    document.querySelector(".clue").innerHTML = `<p>random word is : ${randomitem}<p>`
  }
}

function hangmanImage(){
 let image = document.querySelector(".hangmanimg").querySelector("img").src = `images/hangman${mistakes}.png`
}

function letterHandler(letter){
  letter = letter.toLowerCase();
  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null ;
  document.getElementById(letter.toUpperCase()).className = "used";
  if (randomitem.indexOf(letter) >= 0){
    setUnderScores();
    winCheck();
  }else if(randomitem.indexOf(letter)=== -1){
    mistakes++;
    loseCheck();
    hangmanImage();
  }
}



function btnHandler(event){
 letterHandler(event.target.id)
}

function keyhandler(event){
  letterHandler(event.key);
}

chooserandom();
setUnderScores();