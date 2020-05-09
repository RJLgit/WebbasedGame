class Task {
	constructor(s, o1, o2, o3) {
		this.scenario = s;
		this.optionOne = o1;
		this.optionTwo = o2;
		this.optionThree = o3;
	}
}

class Option {
	constructor(optionDescription, optionPromote, optionGold, optionDead) {
		this.description = optionDescription;
		this.promote = optionPromote;
		this.oppGold = optionGold;
		this.oppDead = optionDead;
	}
}

let status = 0;
let optSelected = 0;
let gameOverVar = false;
//level of user - i.e. peasent/king etc
let currentLevel = 1;
//stores variable of whether user promoted. Maybe not needed?
let promoted = false;



let taskOne = new Task("Task 1", new Option("O1 T1", true, 5, true), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskTwo = new Task("Task 2", new Option("O1 T2", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskThree = new Task("Task 3", new Option("O1 T3", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskFour = new Task("Task 4", new Option("O1 T4", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskFive = new Task("Task 5", new Option("O1 T5", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskSix = new Task("Task 1", new Option("O1 T6", true, 5, true), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskSeven = new Task("Task 2", new Option("O1 T7", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskEight = new Task("Task 3", new Option("O1 T8", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskNine = new Task("Task 4", new Option("O1 T9", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskTen = new Task("Task 5", new Option("O1 T10", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskEleven = new Task("Task 1", new Option("O1 T11", true, 5, true), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskTwelve = new Task("Task 2", new Option("O1 T12", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskThirteen = new Task("Task 3", new Option("O1 T13", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskFourteen = new Task("Task 4", new Option("O1 T14", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));
let taskFifteen = new Task("Task 5", new Option("O1 T15", true, 5, false), new Option("O1 T1", true, 5, false), new Option("O1 T1", true, 5, false));

const arr = [taskOne, taskTwo, taskThree, taskFour, taskFive];

let scenarioUI;
let answerOneUi;
let answerTwoUi;
let answerThreeUi;
let resultUI;
let buttonTryAgain;

function nextTaskOne() {
	let theOption = arr[status].optionOne;
	if (theOption.oppDead) {
		gameOver();
		gameOverVar = true;

	}

	if (!gameOverVar) {
		if (status < arr.length - 1) {
		status++;

	}
	displayTask(status);
	}

	
}

function gameOver() {
	resultUI.textContent = "You Died";
	resultUI.style.display = 'block';
	buttonTryAgain.style.display = 'block';
	answerOneUi.style.display = 'none';
	answerTwoUi.style.display = 'none';
	answerThreeUi.style.display = 'none';
}

function nextTaskTwo() {
	let theOption = arr[status].optionTwo;
	if (status < arr.length - 1) {
		status++;

	}
	displayTask(status);
}
function nextTaskThree() {
	let theOption = arr[status].optionThree;
	if (status < arr.length - 1) {
		status++;

	}
	displayTask(status);
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
	buttonTryAgain.style.display = 'none';
	resultUI.style.display = 'none';
	displayTask(status)
	answerOneUi.onclick = nextTaskOne;
	answerTwoUi.onclick = nextTaskTwo;
	answerThreeUi.onclick = nextTaskThree;
	buttonTryAgain.onclick = retryTasks;
}

function displayTask(myStatus) {
	scenarioUI.textContent = arr[myStatus].scenario;
	answerOneUi.textContent = arr[myStatus].optionOne.description;
	answerTwoUi.textContent = arr[myStatus].optionTwo.description;
	answerThreeUi.textContent = arr[myStatus].optionThree.description;
}

window.onload = init();


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

