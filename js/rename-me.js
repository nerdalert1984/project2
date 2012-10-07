// Author: Matt Ballert
// 10/6/2012
// Project 2
// Advanced JavaScript

// My Variables
var nameOfHero = "Hunter, Bane of Chaos ",
	heroPresent = true,
	haveWeapons = true,
	numOfMonsters = 4,
	monsters = [ " Hunpar the Goblin ", 
				 " Wretchmaw the Troll King ", 
				 " Arch-Lich Volsonis ",
				 " Firereek the Red Dragon "
],
	heroWeapon = "the Twin Blades of Frost and Flame"
 
//Procedure (Function with no return value)
var startTale = function (villageName) {
	console.log("The tale begins with " + nameOfHero + "arriving in the small village of " + villageName + ".");
};

startTale("Dunhollow");
	
// Boolean Function with return.
var findHero = function (heroName) {
	if (heroPresent && haveWeapons) {
	heroStatus = " is ready!";
} else { heroStatus = " is not ready.";}
  heroFound = "Our hero, " + heroName + heroStatus;
  return heroFound;
};
var haveHero = findHero("Hunter the Slayer of Evil");
console.log(haveHero);

// Number Function + While Loop with return (Counts up number of villagers pleading)
var pleadingVillagers = function (numOfVillagers) {
while (numOfVillagers <= 4) {
	enoughVillagers = "There are " + numOfVillagers + " villagers pleading for help.";
	console.log(enoughVillagers);
	numOfVillagers++;

};
	return enoughVillagers;
};

var pleaVillagers = pleadingVillagers(0)


console.log("There are so many villagers pleading for help.")

// String Function with Return
var saysHelp = function (whoSays) {
	huntSays = whoSays + ' says, "I will help you with your monster problem!"';
	return huntSays;
};

var heSays = saysHelp("Hunter");
console.log(heSays);

// For Loop Inside of a Function
var showdown = function (monsterName) {
for (m = monsterName; m < 4; m++) {
	heroFight = nameOfHero + "has fought and slain " + monsters[m] + ".";
	console.log(heroFight);
};
	return heroFight;
};

var whatShowdown = showdown(0)

//Procedure (Function with no return value)
var endTale = function (villageName) {
	console.log(nameOfHero + "has saved the village of " + villageName + "!" + " Our hero sheathes ");
	console.log(heroWeapon + " and begins his journey to the next town in need of his help.");
};

//Procedure (Function with no return value)
endTale("Dunhollow");