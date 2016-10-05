var countLetters = function(str) {
	var noSpacesStr = str.replace(/ /g, "").toUpperCase();
	// TEST CODE: console.log(noSpacesStr);

	var letterCount = {};

	for (var i = 0; i < noSpacesStr.length; i++) {
		if (letterCount[noSpacesStr[i]] === undefined) {
			letterCount[noSpacesStr[i]] = 1;
		} else {
			letterCount[noSpacesStr[i]] += 1;
		}
	}

	return letterCount;
}

console.log(countLetters("Pitbull is ip banned"));
