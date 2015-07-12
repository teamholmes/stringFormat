/**
 * Emulates the c# string.Format function
 *
 * Example : stringFormat('This {0} should be {1}','position','replaced')
 * Returns : This position should be replaced
 */
module.exports = {

	stringFormat : function() {

	var initialString = arguments[0];

	var matchedArray = initialString.match(/\{\d+\}/gi);

	for (var counter = 0, arrLength = matchedArray.length; counter < arrLength; counter++) {

		initialString = initialString.replace(matchedArray[counter],arguments[counter + 1]);
	};

	return initialString;

	}

};