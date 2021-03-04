var obj = {
	firstName: "Matthijs",
	lastName: "Kamstra",
	data: [10, 20, 30]
};
var count = 0;

console.log(obj.data[0]);

/**
 *
 */
function init() {
	findAndUpdate();
	// changeContent()
}

/**
 *
 */
function changeContent() {
	if (count > 10) return;

	var el = document.getElementById('myTarget');
	// var temp = el.innerText;
	// console.log(temp);
	// el.innerText = temp + " - " + obj.firstName + " " + obj.lastName;
	el.innerText = count;
	el.style.border = '10px solid pink';
	el.title = 'changed';
	// el.classList.add = 'toggle';
	el.classList.add('toggle');
}

/**
 *
 */
function findAndUpdate() {
	var btn = document.getElementById('changeContentBtn');
	btn.onclick = function () {
		// console.log('click');
		count++;
		// count = count + 1;
		changeContent();
	}
}

document.addEventListener('DOMContentLoaded', function (event) {
	// the event occurred
	console.log('DOM ready');
	init();
});
