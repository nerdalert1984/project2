// Author: Matt Ballert
// 10/4/2012
// Project 2
// Advanced JavaScript

// My Variables
var heroPresent = true,
	haveWeapons = true,
	numOfMonsters = 4,
	monsters = [ " Hunpar the Goblin ", 
				 " Wretchmaw the Troll King ", 
				 " Arch-Lich Volsonis ",
				 " Firereek the Red Dragon "
],
	monsterHP = [ 10,
				  30,
				  60,
				  120
],
	heroicWeapons = [ " Steel shortsword ",
					  " Longsword of Eternal Flame ",
					  " Blessed Mace of Smiting ",
					  " Greatsword of Draconic Ruin "
],
	weaponDMG = [ 5,
				  10,
				  15,
				  20
]
	
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

// Number Function + While Loop (Counts down number of monsters in need of slaying.)
var pleadingVillagers = function (numOfVillagers) {
while (numOfVillagers < 4) {
	enoughVillagers = "There are " + numOfVillagers + " pleading for help.";
	numOfVillagers++;
	return enoughVillagers;};
};
var pleaVillagers = pleadingVillagers(0)

console.log("There are so many villagers pleading for help.")

