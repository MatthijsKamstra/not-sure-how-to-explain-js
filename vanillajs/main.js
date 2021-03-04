function hello(name) {
    console.log('Hello ' + name + '!');
}

function searchID(id) {
    var el = document.getElementById(id); // only one
    console.log(el);
}

function searchClassName(name) {
    var arr = document.getElementsByClassName(name); // a list
    console.log(arr);
    console.log(arr.length);
}

function changeContent(text) {
    var el = document.getElementById('myTarget');
    el.innerText = text;
}

function changeBtnText(className, text) {
    var arr = document.getElementsByClassName(className); // a list
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        el.innerText = text;
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    // the event occurred
    console.log('DOM ready');
    // hello('Matthijs');
    // searchID('myTarget');
    // searchClassName('btn');
    // changeContent('this is dynamic content');
    // changeBtnText('btn', 'Changed!');
});
