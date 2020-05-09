class Task {
	constructor(s, o1, o2, o3) {
		this.scenario = s;
		this.optionOne = o1;
		this.optionTwo = o2;
		this.optionThree = o3;
	}
}

let taskOne = new Task("Task 1", "O1 T1", "O2 T2", "O3 T3");
let taskTwo = new Task("Task 1", "O1 T1", "O2 T2", "O3 T3");
let taskThree = new Task("Task 1", "O1 T1", "O2 T2", "O3 T3");
let taskFour = new Task("Task 1", "O1 T1", "O2 T2", "O3 T3");
let taskFive = new Task("Task 1", "O1 T1", "O2 T2", "O3 T3");

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

