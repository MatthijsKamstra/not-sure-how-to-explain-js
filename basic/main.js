/////////////////////////////////////////////////
// comment
/////////////////////////////////////////////////

// single line comment

/**
 * block comment
 */

/////////////////////////////////////////////////
// logging
/////////////////////////////////////////////////

console.log('hello');

console.warn('warn');

console.info('info');

console.error('error');

/////////////////////////////////////////////////
// variables, arrays and objects
/////////////////////////////////////////////////

var isVisible = true;
var myFirstName = 'Matthijs';
var myLastName = "Kamstra";
// myFirstName + " " + myLastName;
var myxName = `Kamstra ${myFirstName}`;
var myLength = 1.97; // meters
var myEgo = 25;
var myToysArray = ['nintendo', 'skateboard', 'scissor', '21'];
var myObj = { key1: "Hello", key2: "World", key3: 21, key4: true, data: ['x', 'y'] };

/////////////////////////////////////////////////
// logic and control Structures
/////////////////////////////////////////////////

// if else
var count = 1;
if (count == 1) {
    count = 0;
}

if (count == 3) {
    // evaluated if count is 3
} else if (count == 4) {
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4
}

// for loop
for (var i = 0; i < myToysArray.length; i++) {
    // will run 5 times
}

for (var i = 0; i < 5; i++) {
    // will run 5 times
}

// switch
var grade = 'B';
switch (grade) {
    case 'A':
        console.log("Great job");
        break;
    case 'B':
        console.log("OK job");
        break;
    case 'C':
        console.log("You can do better");
        break;
    default:
        console.log("Oy vey");
        break;
}

/////////////////////////////////////////////////
// functions
/////////////////////////////////////////////////

function test(params) {
    console.log('test: ' + params);
}
test('foobazzz');

function add(a, b) {
    console.log(a + b);
}
add(100, 4);
