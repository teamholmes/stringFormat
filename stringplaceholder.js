/**
 * Emulates the c# string.Format function
 *
 * Example : replacePlaceholder('This {0} should be {1}','position','replaced')
 * Returns : This position should be replaced
 */
module.exports = {

	replacePlaceholder : function() {

	var initialString = arguments[0];

	var thisArguments = arguments;

	return initialString.replace(/\{\d+\}/gi, function (match,pos) {

		var placeholderIndex = match.replace(/(\{)|(\})/gi,'');

		var argumentPosition = parseInt(placeholderIndex,10);

		return thisArguments[argumentPosition + 1];

	});

	}

};