var getDieRoll = function(dieSize) {
// result is a local variable
	var result = Math.ceil(dieSize * Math.random());
	return result;
};

var showResult = function () {
// firstDie and secondDie are global variables
	console.log(firstDie);
    console.log(secondDie);
    console.log(firstDie + secondDie);
};

var firstDie = getDieRoll(10);
var secondDie = getDieRoll(10);
showResults();