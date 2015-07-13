/**
 * Emulates the c# string.Format function
 *
 * Example : stringFormat('This {0} should be {1}','position','replaced')
 * Returns : This position should be replaced
 */
module.exports = {

	stringFormat : function() {

	var initialString = arguments[0];

	var thisArguments = arguments;

	return initialString.replace(/\{\d+\}/gi, function (match,pos) {

		var placeholderIndex = match.replace(/(\{)|(\})/gi,'');

		var argumentPosition = parseInt(placeholderIndex,10);

		return thisArguments[argumentPosition + 1];

	});

	}

};