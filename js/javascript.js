$(document).ready(init);
let one = 1;
let three = 3;
let seven = 7;

function init() {
    $("#1-progress-bar").width(one + '%');
    $("#3-progress-bar").width(three + '%');
    $("#7-progress-bar").width(seven + '%');
}

document.getElementById('btn-1').onclick = function greenBtn() {
    let caption = document.getElementById("1-progress-bar");
    let oneValue = 1;
    $("#1-progress-bar").width(one + '%');
    one+=oneValue;
    caption.style.width = one + '%';
    caption.innerHTML = one * 1 + '%';
};

document.getElementById('btn-3').onclick = function yellowBtn() {
    let caption = document.getElementById("3-progress-bar");
    let threeValue = 3;
    $("#3-progress-bar").width(three + '%');
    three += threeValue;
    caption.style.width = three + '%';
    caption.innerHTML = three * 1 + '%';
};

document.getElementById('btn-7').onclick = function redBtn() {
    let sevenValue = 7;
    let caption = document.getElementById("7-progress-bar");
    $("#7-progress-bar").width(seven + '%');
    seven += sevenValue;
    caption.style.width = seven + '%';
    caption.innerHTML = seven * 1 + '%';
};