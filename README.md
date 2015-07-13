
stringFormat
=========

A small function that replicates the functionality of c#'s string.Format function

## Installation

  npm install stringplaceholder --save

## Usage

	var strObj = require('stringplaceholder/stringplaceholder.js');

	var myString = "Hello there, my name is {0}, Good {1}.";

	console.log(strObj.replacePlaceholder(myString,'Russell', 'morning'));


## Tests

  grunt test


## Release History

* 0.1.0 Initial release