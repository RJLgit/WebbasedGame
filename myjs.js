class Task {
	constructor(s, o1, o2, o3) {
		this.scenario = s;
		this.optionOne = o1;
		this.optionTwo = o2;
		this.optionThree = o3;
	}
}

class Option {
	constructor(optionDescription, optionPromote, optionGold, optionDead, optionResult) {
		this.description = optionDescription;
		this.promote = optionPromote;
		this.oppGold = optionGold;
		this.oppDead = optionDead;
		this.oppResult = optionResult;
	}
}

let status = 0;
let optSelected = 0;
let gameOverVar = false;
let gold = 5;
//level of user - i.e. peasent/king etc
let currentLevel = 1;
//Change this if add more tasks per level
let numberOfQuestionsPerLevel = 3;
//stores variable of whether user promoted. Maybe not needed?
let promoted = false;



let taskOne = new Task("You are working the fields for your land-owner when an unknown man approaches you. He has a scar on his face and you feel an evil energy from him. He says if you murder your land-owner then he will forge the papers to give you the land. What do you do?", 
	new Option("Refuse to take part and report him to the land-owner", false, 12, false, "Your land-owner is grateful for your loyalty and gives you 12 gold"), 
	new Option("Attempt to poison your land-owner", false, 0, false, "Your plan fails but the land-owner never finds out"), 
	new Option("Attack the unknown man and take his head to the land-owner", false, -5, true, "The unknown man over-powers you and kills you, taking your gold as you die"));
let taskTwo = new Task("You return home after a hard day working and find the door of your house broken open. You look through the window and see your land-owner inside, searching through your house. You enter and confront him. He breaks down and admits he is financially ruined and trying to steal your gold. What do you do?", 
	new Option("Threaten to go to his Lord unless he gives you half his land", true, 0, false, "He agrees to sign over half his land and promotes you to a land-owner"), 
	new Option("Threaten to go to his Lord unless he gives you what he has stolen from others", false, 25, false, "He digs into his pocket and gives you 25 gold. You feel guilty, who has he stolen this from? But you pocket the money and let him go."), 
	new Option("Attack him", false, 50, false, "You overpower him, striking him with a candlestick. The blow kills him instantly. You feel afraid but dig into his pockets, taking 50 gold that he must have stolen from elsewhere."));
let taskThree = new Task("A fellow Peasant approaches you and says that he has heard rumours that you have the gold that the land-owner stole from him. He demands that you give it back to him. What do you do?", 
	new Option("Deny that you have the gold and instead use the gold to buy your own land", true, -30, false, "You buy a small land holding with the gold."), 
	new Option("Admit that you have the gold and offer it back to him", true, -25, false, "It turns out the man was a rich land owner from a nearby county. Impressed by your honesty he gifts you a small holding to own for yourself"), 
	new Option("Attack the man", false, 5, true, "The man has 4 accomplises hiding in the woods nearby. You are quickly overpowered and killed."));
let taskFour = new Task("As a land owner you now have many responsibilities. One of your peasents approaches you and asks for a loan to invest in the infrastructure of the land to improve its output. What do you do?", 
	new Option("Agree to his ideas", false, 55, false, "His ideas massively increase productivity on your land, earning you 55 gold."), 
	new Option("Regrettfully tell him no", false, 0, false, "The peasent moves away disapointed."), 
	new Option("Rebuke the peasent for his audacity in approaching you", false, -5, false, "The angry peasent attacks you, knocking you out and taking 5 of your gold"));
let taskFive = new Task("A representative for your Lord approaches you and says that your Lord is in conflict with another nearby Lord. He demands your military service to support him. What do you do?", 
	new Option("Agree to the service", false, 5, false, "The representive gives you 5 gold and you follow him to the army."), 
	new Option("Refuse to serve, it is not your fight", false, 5, true, "The representative calls you a traitor and kills you."), 
	new Option("Demand more gold to serve", false, 15, false, "The representative is annoyed but gives you 15 gold and you follow him to the army"));
let taskSix = new Task("The battle has been going on for an hour. You see the enemy Lord just ahead of you on the battlefield. He is a huge man, smiting all those who approach him. What do you do?", 
	new Option("Play dead until the battle ends", false, 0, true, "Your cowardice is noticed by your lord. He sends you back to your land and vows you shall never be promoted"), 
	new Option("Sneak up on the Lord from behind and stab him in the back", true, 0, false, "You kill the enemy Lord. Your Lord promotes you to a Knight of the Realm."), 
	new Option("Approach the Lord and challenge him to combat", false, 0, true, "The enemy Lord cuts you down with ease. Why did you think you could defeat him?"));
let taskSeven = new Task("Task 7", 
	new Option("O1 T7", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskEight = new Task("Task 8", 
	new Option("O1 T8", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskNine = new Task("Task 9", 
	new Option("O1 T9", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskTen = new Task("Task 10", 
	new Option("O1 T10", true, -5, false, "Result of your last action: The man took your 5 gold and didn't give you anything"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskEleven = new Task("Task 11", 
	new Option("O1 T11", true, 5, true, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskTwelve = new Task("Task 12", 
	new Option("O1 T12", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskThirteen = new Task("Task 13", 
	new Option("O1 T13", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskFourteen = new Task("Task 14", 
	new Option("O1 T14", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));
let taskFifteen = new Task("Task 15", 
	new Option("O1 T15", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"), 
	new Option("O1 T1", true, 5, false, "Result 2"));

const arr = [taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix, taskSeven, taskEight, 
taskNine, taskTen, taskEleven, taskTwelve, taskThirteen, taskFourteen, taskFifteen];

let scenarioUI;
let answerOneUi;
let answerTwoUi;
let answerThreeUi;
let resultUI;
let buttonTryAgain;
let goldUi;
let levelUi;
let buttonContinue;

function nextTaskOne() {
	let theOption = arr[status].optionOne;


	gold = gold + theOption.oppGold;
	
	if (theOption.oppDead) {
		gameOver();
		gameOverVar = true;

	}
	resultUI.textContent = theOption.oppResult;
	if (theOption.promote) {
		
		switch (currentLevel) {
			case 1:
				currentLevel++;
				status = numberOfQuestionsPerLevel;
				console.log(status);
				displayTask(status);
				break;
			case 2:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 2;
				displayTask(status);
				break;
			case 3:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 3;
				displayTask(status);
				break;
			case 4:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 4;
				displayTask(status);
				break;
			case 5:
				
				wonGame();
				gameOverVar = true;

				break;
		}
	}

	if (!gameOverVar && !theOption.promote) {
		if (status < arr.length - 1) {
		status++;

	}
	displayTask(status);
	}

	
}

//need to put deah/promote functionality in these once they work for task 1 method
function nextTaskTwo() {
	let theOption = arr[status].optionTwo;


	gold = gold + theOption.oppGold;
	
	if (theOption.oppDead) {
		gameOver();
		gameOverVar = true;

	}
	resultUI.textContent = theOption.oppResult;
	if (theOption.promote) {
		
		switch (currentLevel) {
			case 1:
				currentLevel++;
				status = numberOfQuestionsPerLevel;
				console.log(status);
				displayTask(status);
				break;
			case 2:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 2;
				displayTask(status);
				break;
			case 3:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 3;
				displayTask(status);
				break;
			case 4:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 4;
				displayTask(status);
				break;
			case 5:
				
				wonGame();
				gameOverVar = true;

				break;
		}
	}

	if (!gameOverVar && !theOption.promote) {
		if (status < arr.length - 1) {
		status++;

	}
	displayTask(status);
	}
}

function nextTaskThree() {
	let theOption = arr[status].optionThree;


	gold = gold + theOption.oppGold;
	
	if (theOption.oppDead) {
		gameOver();
		gameOverVar = true;

	}
	resultUI.textContent = theOption.oppResult;
	if (theOption.promote) {
		
		switch (currentLevel) {
			case 1:
				currentLevel++;
				status = numberOfQuestionsPerLevel;
				console.log(status);
				displayTask(status);
				break;
			case 2:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 2;
				displayTask(status);
				break;
			case 3:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 3;
				displayTask(status);
				break;
			case 4:
				currentLevel++;
				status = numberOfQuestionsPerLevel * 4;
				displayTask(status);
				break;
			case 5:
				
				wonGame();
				gameOverVar = true;

				break;
		}
	}

	if (!gameOverVar && !theOption.promote) {
		if (status < arr.length - 1) {
		status++;

	}
	displayTask(status);
	}
}

function wonGame() {
	resultUI.textContent = "You have completed the game and are known as a great king";
	resultUI.style.display = 'block';
	buttonTryAgain.style.display = 'block';
	answerOneUi.style.display = 'none';
	answerTwoUi.style.display = 'none';
	answerThreeUi.style.display = 'none';
}

function gameOver() {
	resultUI.textContent = "You Died";
	resultUI.style.display = 'block';
	buttonTryAgain.style.display = 'block';
	answerOneUi.style.display = 'none';
	answerTwoUi.style.display = 'none';
	answerThreeUi.style.display = 'none';
}



function retryTasks() {
	console.log("retry");
}


function init() {
	scenarioUI = document.getElementById("scenario");
	answerOneUi = document.getElementById("answerOne");
	answerTwoUi = document.getElementById("answerTwo");
	answerThreeUi = document.getElementById("answerThree");
	resultUI = document.getElementById("resultElement");
	buttonTryAgain = document.getElementById("buttonRetry");
	goldUi = document.getElementById("gold");
	levelUi = document.getElementById("level");
	buttonTryAgain.style.display = 'none';
	buttonContinue = document.getElementById("buttonContinue");
	buttonContinue.style.display = 'none';
	displayTask(status)
	answerOneUi.onclick = nextTaskOne;
	answerTwoUi.onclick = nextTaskTwo;
	answerThreeUi.onclick = nextTaskThree;
	buttonTryAgain.onclick = retryTasks;
}

function displayTask(myStatus) {
	goldUi.textContent = gold;
	switch(currentLevel) {
		case 1:
				levelUi.textContent = "Peasant";
				break;
			case 2:
				levelUi.textContent = "Land Owner";
				break;
			case 3:
				levelUi.textContent = "Knight";
				break;
			case 4:
				levelUi.textContent = "Lord of the Realm";
				break;
			case 5:
				levelUi.textContent = "King";
				break;

	}

	
	scenarioUI.textContent = arr[myStatus].scenario;
	answerOneUi.textContent = arr[myStatus].optionOne.description;
	answerTwoUi.textContent = arr[myStatus].optionTwo.description;
	answerThreeUi.textContent = arr[myStatus].optionThree.description;
}

window.onload = init;


console.log(taskTwo);
 
let peasant = {
	first: taskOne,
	second: taskTwo,
	third: taskThree,
	fourth: taskFour,
	fifth: taskFive
};

console.log(peasant);

let landOwner = {
	first: "O Task 1",
	second: "O Task 2",
	third: "O Task 3",
	fourth: "O Task 4",
	fifth: "O Task 5"
};

let knight = {
	first: "K Task 1",
	second: "K Task 2",
	third: "K Task 3",
	fourth: "K Task 4",
	fifth: "K Task 5"
};

let lord = {
	first: "L Task 1",
	second: "L Task 2",
	third: "L Task 3",
	fourth: "L Task 4",
	fifth: "L Task 5"
};

let king = {
	first: "Ki Task 1",
	second: "Ki Task 2",
	third: "Ki Task 3",
	fourth: "Ki Task 4",
	fifth: "Ki Task 5"
};

