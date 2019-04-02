window.addEventListener('load', function() {
   setTimeout(function() {
       document.getElementById("loading").className += " fade-loading";
       document.getElementById("loading").style.zIndex = -1;
   }, 3000) 
});

var workRight = document.querySelector("#work .right");
var workRightButton = document.querySelectorAll("#work .right svg");
var workLeft = document.querySelector("#work .left");
var workRightText = document.querySelectorAll("#work .right .text");
var i = 0;

for (i = 0; i < workRightButton.length; i++) {
    workRightButton[i].addEventListener('click', workOpen);
    workLeft.addEventListener('click', workClose);
}

function workOpen() {
    workRight.style.width = "70%";
    workLeft.style.width = "30%";
    this.style.marginTop = "200px";
    this.nextElementSibling.style.opacity = 1;
}

function workClose() {
    workRight.style.width = "50%";
    workLeft.style.width = "50%";
    for(i = 0; i < workRightButton.length; i++) {
        workRightButton[i].style.marginTop = "300px";
        workRightButton[i].nextElementSibling.style.opacity = 0;
    }
}

var eyeBall = document.getElementById("theeye");
var endingScene = document.getElementById("ending");
endingScene.addEventListener('mousemove', function(e) {
    var x = e.clientX / window.innerWidth * 100 - 50 + "px";
    var y = e.clientY / window.innerHeight * 100 - 50 + "px";
    eyeBall.style.transform = "translate(" + x + "," + y + ")";
})