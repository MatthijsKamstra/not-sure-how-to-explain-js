function hello(name) {
    console.log('Hello ' + name + '!');
}

function searchID(id) {
    var el = document.getElementById(id); // only one
    console.log(el);
}

function changeContent(text) {
    var el = document.getElementById('myTarget');
    el.innerText = text;
}

function searchClassName(name) {
    var arr = document.getElementsByClassName(name); // a array
    console.log(arr);
    console.log(arr.length);
}

function changeBtnText(className, text) {
    var arr = document.getElementsByClassName(className); // a arr
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        el.innerText = text;
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    // the event occurred
    // console.log('DOM ready');
    // hello('Matthijs');
    // searchID('myTarget');
    // changeContent('this is dynamic content 2');
    // searchClassName('btn');
    changeBtnText('btn', 'Changed!');
});
