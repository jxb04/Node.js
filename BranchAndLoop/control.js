var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
};

for (var i = 0; i < process.argv.length; i++) {
	console.log (i);
	console.log (process.argv[i]);
}

var roll = getDieRoll(6);

for (var i = 0; i < 10; i += 1) {
	if (roll >= 4) {
		console.log("*");
	}
	else {
		console.log("-");
	}
	roll = getDieRoll(6);
}

if((roll >= 2 && roll <= 5)) {
	console.log("That was an ok roll.");
}
else if(roll == 1) {
	console.log("Terrible roll.");
}
else{
	console.log("Great Roll!");
}

console.log("You rolled a " + roll);