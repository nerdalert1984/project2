// Author: Matt Ballert
// 10/4/2012
// Project 2
// Advanced JavaScript

// My Variables
var heroPresent = true,
	haveWeapons = true,
	numOfMonsters = 4,
	monstersSlain = 0
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

// Number Function + While Loop (Counts down number of monsters slain and in need of slaying.)
var slainMonsters = function () {

while (monstersSlain <= 4) {
	console.log(monstersSlain + " monsters have been slain")
	monstersSlain++;
};
};

while (numOfMonsters > 0) {
	console.log("There are " + numOfMonsters + " vile monsters to slay.");
	numOfMonsters--;
	slainMonsters();
};

console.log("There are no monsters to slay.")


// For Loop
