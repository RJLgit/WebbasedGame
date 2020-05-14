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
let score = 0;



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
	new Option("Refuse to serve, it is not your fight", false, 0, true, "The representative calls you a traitor and kills you."), 
	new Option("Demand more gold to serve", false, 15, false, "The representative is annoyed but gives you 15 gold and you follow him to the army"));
let taskSix = new Task("The battle has been going on for an hour. You see the enemy Lord just ahead of you on the battlefield. He is a huge man, smiting all those who approach him. What do you do?", 
	new Option("Play dead until the battle ends", false, 0, true, "Your cowardice is noticed by your lord. He sends you back to your land and vows you shall never be promoted"), 
	new Option("Sneak up on the Lord from behind and stab him in the back", true, 0, false, "You kill the enemy Lord. Your Lord promotes you to a Knight of the Realm."), 
	new Option("Approach the Lord and challenge him to combat", false, 0, true, "The enemy Lord cuts you down with ease. Why did you think you could defeat him?"));
let taskSeven = new Task("Having been promoted to a Knight, you now have a lot of power. But you are also a target. The son of the lord you slayed is out for revenge. You receive information he is currently drunk and vulnerable in a nearby alehouse. What do you do?", 
	new Option("Raise a small group of men to attack him in the alehouse", false, 0, false, "You stand by as your men kill the son. Their reward is the gold he carries so you get none."), 
	new Option("Attack him on your own. He is a single drunk man", false, 50, false, "He does not notice you enter and you easily are able to take him by surprise and kill him. You take the 50 gold he has on him."), 
	new Option("Visit him and demand gold for his safe passage", false, 200, false, "Outmatched by you, he agrees to pay you 200 gold for his safe passage"));
let taskEight = new Task("The family of the lord you killed is still causing problems. His brother, who is now the lord, is talking openly of war with your lord. You lord summons you and asks you to lead the army to attack their stronghold. After a siege you break into the stronghold and arrest the enemy lord. What do you do?", 
	new Option("Execute him and declare yourself lord", true, 0, false, "You become a lord of the realm"), 
	new Option("Offer to leave if he pays you well", false, 500, false, "The lord pays you 500 gold and you leave with your army."), 
	new Option("Challenge him to 1 on 1 combat to prove your dominance", false, 0, true, "Their lord kills you in combat!"));
let taskNine = new Task("Your lord demands half of the 500 gold you got from your victory. What do you do?", 
	new Option("Refuse to pay and murder your lord, declaring yourself lord in his place", true, 0, false, "Result 2"), 
	new Option("Agree to pay your lord his share of the gold", true, 0, false, "Impressed by your honour, your lord names you his heir and announces his decision to retire."), 
	new Option("Refuse to pay and attempt to walk away", false, 0, true, "Angry, your lord calls his archers to shoot you as you leave. He laughs at you as you die on the floor."));
let taskTen = new Task("Now a lord of the realm you have a lot of responsibilities. The king is worried about a religious heresy in your area of control. He tells you of an old man who is thought to be behind the heresy. He tells you to sort it out. You summon a small force and you find the man alone in a field. What do you do?", 
	new Option("Ride him down and leave him in the dirt", false, 0, true, "As soon as you charge an army of religious fanatics emerges from a nearby wood. They slaughter you and your men."), 
	new Option("Apprach him alone to talk and find out more", false, 0, false, "He tells you about his hatred for the king, and claims he can overthrow him."), 
	new Option("Order your archers to shoot him", false, 0, true, "You kill the religious man but an army of insensed religious fanatics emerges from a nearby wood. They slaughter you and your men."));
let taskEleven = new Task("The religious man says that he has a heretic army ready to overthrow the king. He wants to know if you will join him, saying he will make you king or if you are loyal to the king? What do you do?", 
	new Option("Agree to convert and join the religious man in a rebellion against the king", false, 0, true, "Together, you overthrow the king but in the midst the battle the religious man betrays you, stabbing you in the back. As you die he tells you that he will never follow another lord."), 
	new Option("Challenge the religious man to 1 on 1 combat", true, 0, false, "You defeat the religious man in front of many of his followers. You declare that God has proven that you are the true leader. The followers join you, and together you overthrow the king and are crowned in his place"), 
	new Option("Refuse to betray the king", false, 0, false, "You ride away without answering, intent on finding the king and telling him of the danger that is forming against him."));
let taskTwelve = new Task("You must now give your news to the king. He will not be happy that you have failed to squash the heresy. What do you do?", 
	new Option("Tell him the truth and that you will fight for the king always", false, 0, true, "The king accuses you of cowardice, and chops off your head."), 
	new Option("Tell him that the religious man is loyal to him", false, 0, true, "The king looks into your eyes and sees your lie. He chops off your head for betraying him."), 
	new Option("Tell him that you will track the religious man down and kill him", true, 0, false, "The king approves. You find the religious man and kill him. In gratitude the king names you his heir for you have saved the kingdom. Sadly, the king passes away soon after. Now you are king."));
let taskThirteen = new Task("As king you must now control your lords and look to expand your land and wealth..for money and land is power. One of your ambitious lords approaches you and requests permission to raise an army to conquer land in your name. What do you do?", 
	new Option("You deny his request as you do not trust him", false, 0, false, "The lord leaves in anger."), 
	new Option("Tell him to raise the army but you will lead it", true, 150, false, "You successfully lead the army to conquer new lands. You become none as a great king, lauded throughout time."), 
	new Option("Allow him to lead the army on your behalf", false, 0, true, "The lord decieved you. Once he has control of the army he attacks you instead. His army is too much, you are defeated in battle and slain in the field."));
let taskFourteen = new Task("The angry lord is furious that you doubted his loyalty. You hear news that he is mustering troops. He says it is to conquer the land on your behalf but you fear his real target is you. What do you do?", 
	new Option("Muster troops and ride against him immedietely", false, -25, true, "After spedning gold to hire men, you walk into an ambush, behaving exactly as the lord wanted you do. You and your men are slaughtered."), 
	new Option("Muster troops in your fortress, and wait to see what happens", false, -25, false, "You spend gold to hire an army. Now you must wait to see what the lord does."), 
	new Option("Call the lord to you and demand he stop raising an army.", false, 0, true, "The lord approaches your throne, then he takes a dagger out of his pocket and stabs you. As you die the lord laughs and tells you how your men worked with him as they despised how you came to the throne."));
let taskFifteen = new Task("The Lord's aims are now clear. He has abandoned any stealth and marches on your fortress with his army. What do you do?", 
	new Option("Set up an ambush for him before he reaches you", true, 0, false, "Your intelligence impresses your men. You ambush the lord before he reaches your fortress, killing him and routing his men. You are honoured as a great ruler of the nation throughout time."), 
	new Option("Draw up your forces in the open field, and challenge him to battle.", true, 0, false, "Your optimism rubs off on your men. Morale is high for the battle. You army is victorious and you are honoured throughout time as a great ruler."), 
	new Option("Stay in your fortress and wait for him to attack", false, 0, true, "Angered by your cowardice, your own men revolt against you. You are slaughtered in a riot as your people call you a coward."));

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
let gameUi;
let scoreUi;

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
	resultUI.textContent = theOption.oppResult;

	gold = gold + theOption.oppGold;
	
	if (theOption.oppDead) {
		gameOver();
		gameOverVar = true;

	}
	
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
	resultUI.style.display = 'block';
	buttonTryAgain.style.display = 'block';
	answerOneUi.style.display = 'none';
	answerTwoUi.style.display = 'none';
	answerThreeUi.style.display = 'none';
	score = gold * currentLevel;
	for (i = 0; i < gameUi.length; i++) {
		gameUi[i].style.display = 'none';
	}
	scoreUi.textContent = "You reached the level of " + getTextLevel(currentLevel) + ". Your final gold was " + gold + ". Your final score was " + score;
}

function gameOver() {
	resultUI.style.display = 'block';
	buttonTryAgain.style.display = 'block';
	answerOneUi.style.display = 'none';
	answerTwoUi.style.display = 'none';
	answerThreeUi.style.display = 'none';
	score = gold * currentLevel;
	for (i = 0; i < gameUi.length; i++) {
		gameUi[i].style.display = 'none';
	}
	scoreUi.textContent = "You reached the level of " + getTextLevel(currentLevel) + ". Your final gold was " + gold + ". Your final score was " + score;
}

function getTextLevel(lev) {
	switch(lev) {
		case 1:
				return "Peasant";
				break;
			case 2:
				return "LandOwner";
				break;
			case 3:
				return "Knight";
				break;
			case 4:
				return "Lord";
				break;
			case 5:
				return "King";
				break;
			default:
				return "Peasant";
				break;
	}
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
	gameUi = document.getElementsByClassName("gameUI");
	scoreUi = document.getElementById("score");
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

