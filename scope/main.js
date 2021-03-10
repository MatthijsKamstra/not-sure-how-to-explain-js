let myArr = ['aap', 'noot', 'mies'];
const IS_DEBUG = false;

function foobar(name) {
	if (IS_DEBUG) console.log('> foobar (' + name + ')');
	let temp = 'niet matthijs';
	let tempArr = [];
	if (IS_DEBUG) console.log(temp);
	let count = 0;
	for (let i = 0; i < myArr.length; i++) {
		const str = myArr[i];
		// console.log(str);
		// console.log(i);
		count = i;
		tempArr.push(i + 10);
	}
	// console.log(i);
	if (IS_DEBUG) console.log(count);
	count = 'yes';
	if (IS_DEBUG) console.log(count);
	if (IS_DEBUG) console.log(tempArr);
	logArr(tempArr);
}

// console.log(temp);

function logArr(arr) {
	console.log('------->' + arr);
}


document.addEventListener('DOMContentLoaded', function (event) {
	console.log('DOM ready');
	// console.log(myArr);
	foobar('matthijs');
});
