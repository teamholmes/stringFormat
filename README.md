
stringFormat
=========

A small function that replicates the functionality of c#'s string.Format function

## Installation

  npm install stringFormat --save

## Usage

	var strObj = require('stringformat/stringFormat').stringFormat;

	var myString = "Hello there, my name is {0}, Good {1}.";

	console.log(strObj(myString,'John Doe', 'morning'));


## Tests

  grunt test


## Release History

* 0.1.0 Initial release