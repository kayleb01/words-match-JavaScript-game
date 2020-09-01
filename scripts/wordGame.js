




// The globals

let isPlaying;
let score = 0;

let storageData = window.localStorage;
let Hs 			= document.querySelector("#highScore");
let level		 = document.querySelector("#level");
let speedLevel = document.querySelector("#speedLevel");
let words 		 = document.querySelector(".wordOutput");
let wordInput   = document.querySelector("#word_input");
let message 	 = document.querySelector("#message");
let timeCountDown = document.querySelector("#time_countDown");
let scores 		 = document.querySelector("#score");
let playBtn		 = document.querySelector("#play");

let currentLevel = speedLevel.value;
let time = currentLevel;

let letters = [
'psychology',
 'anthropods', 
 'clever', 
 'ever', 
 'special', 
 'coincidence',
'future',
 'fast', 
 'smart', 
 'technology', 
 'assembly', 
 'introspective', 
 'since', 
 'month', 
 'mouth', 
 'gamble', 
 'flies', 
 'skies', 
 'moon',
 'start',
  'stop',
   'give',
    'commercial',
     'developer', 
     'easy',
     'mad', 
     'spent',
      'rumble',
      'enter', 
      'inside', 
      'buenos', 
      'chocolate',
       'light', 
       'bright', 
       'concise',
       'intimidate',
       'immediate',
       'subconcious',
       'personal',
       'active',
       'sick',
       'health',
       'tea', 
       'sugar',
       'sucker',
       'random',
       'rain',
       'shadows',
       'falling',
       'sproach',
       'wicked'
];

window.addEventListener('load', init());

// The init function bootstrap the game when the play 
// button is clicked
function init() {
	checkHighScore();
	showWords(letters);

	wordInput.addEventListener('input', startMatch);
	//wordInput = "";
	//Initiate countdown sequence
	setInterval(countdown, 1000);
	
	setInterval(chkStatus, 50);
	
	level.innerHTML = currentLevel;
}


// Get words from the letters array and display them
function showWords(letters) {
	let randWords = Math.floor(Math.random() * letters.length);
	words.innerHTML = letters[randWords];

}

function countdown() {
	if (time > 0) {
		time--;
	} else if(time === 0) {
		//game Over
		isPlaying = false;
		setHighScore();
	}
	time_countDown.innerHTML = time;
}

function chkStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = "Game Over !!!";
		score = -1;
	} 
}

function startMatch() {
	if (wordInput.value === words.innerHTML) {
		message.innerHTML = "Correct, You rock!!";
		time = currentLevel;
		isPlaying = true;
		showWords(letters);
		wordInput.value = "";
		score++;	
	} else {
		message.innerHTML = "";
		return false;
	}
	if (score === -1)
	 	scores.innerHTML = 0 ;
	else 
		scores.innerHTML = score;
}


//If isPlaying is false, set highscore
function setHighScore() {
	if (isPlaying == false && storageData.getItem('highScore') >= score) {
			console.log("High score exits");
	}else if(isPlaying == false && storageData.getItem('highScore') < score){
		storageData.removeItem("highScore");
		//Set new highscore since score is greater than the existing highscore
		storageData.setItem('highScore', score);
		checkHighScore();
	}
}
function checkHighScore() {
	if(storageData.getItem('highScore')) {Hs.innerHTML = storageData.getItem('highScore');}
	} 
// function Refresh() {
// 	window.location.reload(true);
// }