var obj = {
	firstName: "Matthijs",
	lastName: "Kamstra"
};

function init() {
	findAndUpdate();
}

function changeContent() {
	var el = document.getElementById('myTarget');
	el.innerText = obj.firstName;
	el.style.border = '1px solid pink';
	el.title = 'changed';

}

function findAndUpdate() {
	var btn = document.getElementById('changeContentBtn');
	btn.onclick = function () {
		changeContent();
	}
}


document.addEventListener('DOMContentLoaded', function (event) {
	// the event occurred
	console.log('DOM ready');
	init();
});
