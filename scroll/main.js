//
let timerArr = [];
let positionArr = [];
let last_known_scroll_position = 0.0;
let ticking = false;


function collectData() {
	var arr = document.getElementsByClassName('animate-timer');
	if (arr.length <= 0) return;
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		const obj = {
			element: el,
			endValue: parseInt(el.innerHTML),
			startValue: parseInt(0)
		};
		timerArr.push(obj);
		// startAnimation(el, obj.endValue);
	}
	setupTriggers();

	document.addEventListener('scroll', function (e) {
		last_known_scroll_position = window.scrollY;
		// use tick to dampen the calls
		if (!ticking) {
			window.requestAnimationFrame(function (e) {
				// toggleReveal(last_known_scroll_position);
				console.log(last_known_scroll_position);
				for (let i = 0; i < positionArr.length; i++) {

					if (last_known_scroll_position >= positionArr[i]) {
						console.log('gaan met die banaan ' + i);
					}
				}
				ticking = false;
			});
			ticking = true;
		}
	});
}

function setupTriggers() {
	for (let i = 0; i < timerArr.length; i++) {
		const obj = timerArr[i];
		console.log(offset(obj.element));
		positionArr.push(offset(obj.element).top);
	}
}

function offset(el) {
	var rect = el.getBoundingClientRect();
	return {
		top: rect.top + document.documentElement.scrollTop,
		left: rect.left + document.documentElement.scrollLeft
	}
}

function startAnimation(el, nr) {
	// console.log('startanimation');
	el.innerHTML = '0%';
	let counter = 0;
	let timer = setInterval(updateCounter, 50);
	function updateCounter() {
		counter++;
		el.innerHTML = counter + "%";
		if (counter >= nr) {
			clearInterval(timer);
		}
	}
}


document.addEventListener('DOMContentLoaded', function (event) {
	// the event occurred
	console.log('DOM ready');
	collectData()
});
