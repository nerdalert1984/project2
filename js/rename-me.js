// Author: Matt Ballert
// 10/4/2012
// Project 2
// Advanced JavaScript

// My Variables
var heroName = "Hunter, Slayer of Evil ",
	heroPresent = true,
	haveWeapons = false,
	numOfMonsters = 4,
	monsters = [ " Hunpar the Goblin ", 
				 " Wretchmaw the Troll King ", 
				 " Arch-Lich Volsonis ",
				 " Firereek the Red Dragon "
			   ],
	heroicWeapons = [ " Steel shortsword ",
					  " Longsword of Eternal Flame ",
					  " Blessed Mace of Smiting ",
					  " Greatsword of Draconic Ruin "
					];
	
// Boolean Function
var findHero = function () {
	console.log("The hero is ready!");
};
var noHero = function () {
	console.log("The hero is not ready.")};


if (heroPresent && haveWeapons) {
	findHero();
} else {
	noHero();
};






// Number Function + While Loop (Counts down number of monsters in need of slaying.)
while (numOfMonsters > 0) {
	console.log("There are " + numOfMonsters + " vile monsters to slay.");
	numOfMonsters--;

};

console.log("There are no monsters to slay.");

// For Loop
