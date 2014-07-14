var test = require('tape');
var traverse = require('../traverse');

test('traverse an object with nested functions', function (t) {
    t.plan(1);
    
    function Cons (x) {
        t.equal(x, 10)
    };
    traverse(new Cons(10));
});
