class Task {
	constructor(s, o1, o2, o3) {
		this.scenario = s;
		this.optionOne = o1;
		this.optionTwo = o2;
		this.optionThree = o3;
	}
}

let status = 0;



let taskOne = new Task("Task 1", "O1 T1", "O2 T1", "O3 T1");
let taskTwo = new Task("Task 2", "O1 T2", "O2 T2", "O3 T2");
let taskThree = new Task("Task 3", "O1 T3", "O2 T3", "O3 T3");
let taskFour = new Task("Task 4", "O1 T4", "O2 T4", "O3 T4");
let taskFive = new Task("Task 5", "O1 T5", "O2 T5", "O3 T5");

const arr = [taskOne, taskTwo, taskThree, taskFour, taskFive];

let scenarioUI;
let answerOneUi;
let answerTwoUi;
let answerThreeUi;

function nextTask() {
	if (status < arr.length - 1) {
		status++;

	}
	displayTask(status);
}


function init() {
	scenarioUI = document.getElementById("scenario");
	answerOneUi = document.getElementById("answerOne");
	answerTwoUi = document.getElementById("answerTwo");
	answerThreeUi = document.getElementById("answerThree");
	displayTask(status)
	answerOneUi.onclick = nextTask;
	answerTwoUi.onclick = nextTask;
	answerThreeUi.onclick = nextTask;
}

function displayTask(myStatus) {
	scenarioUI.textContent = arr[myStatus].scenario;
	answerOneUi.textContent = arr[myStatus].optionOne;
	answerTwoUi.textContent = arr[myStatus].optionTwo;
	answerThreeUi.textContent = arr[myStatus].optionThree;
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

