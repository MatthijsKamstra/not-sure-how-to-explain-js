function hello(name) {
    console.log('Hello ' + name + '!');
}

function changeContent(text) {
    var el = document.getElementById('myTarget');
    el.innerText = text;
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

document.addEventListener('DOMContentLoaded', function (event) {
    // the event occurred
    console.log('DOM ready');
    hello('Matthijs');
    changeContent('this is dynamic content');
    searchID('myTarget');
    searchClassName('btn');
});
