

var assert = require("assert");
var sFormat = require("../stringplaceholder.js");

describe('stringFormat tests', function() {
  
    it('Will populate 1 placeholder with correct text', function () {
      assert.equal('This is placeholder text', sFormat.replacePlaceholder('This is {0} text','placeholder'));
    });

     it('Will populate 2 placeholders with correct text', function () {
      assert.equal('This is placeholder item text', sFormat.replacePlaceholder('This is {0} {1} text','placeholder', 'item'));
    });

     it('Will populate 1 placeholder with correct text multiple times', function () {
      assert.equal('This is item here item', sFormat.replacePlaceholder('This is {0} here {0}','item'));
    });
});

