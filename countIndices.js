var countIndices = function(str) {
	var noSpacesStr = str.replace(/ /g, "").toUpperCase();
	// TEST CODE: console.log(noSpacesStr);

	var indicesCount = {};

	for (var i = 0; i < noSpacesStr.length; i++) {

		if (indicesCount[noSpacesStr[i]] === undefined) {
			indicesCount[noSpacesStr[i]] = [];
		} 

		indicesCount[noSpacesStr[i]].push(i);
	}

	return indicesCount;
}

console.log(countIndices("Pitbull is ip banned"));
