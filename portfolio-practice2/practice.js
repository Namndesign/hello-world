const sins = document.querySelectorAll('.sin');

function toggleOpen() {
    this.classList.toggle("open");
    const sinTitle = document.querySelectorAll(".sinTitle");

    /*function openSinExploration() {
        const sinExploration = document.getElementsByClassName("sin-exploration");
        sinExploration[0].style.opacity = 1;
        sinExploration[0].style.zIndex = 100;
    }
    sinTitle.forEach(sinTitle => sinTitle.addEventListener('click', openSinExploration));*/ 
}

function toggleOpenActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle("open-active");
    }
}


sins.forEach(sin => sin.addEventListener('click', toggleOpen));
sins.forEach(sin => sin.addEventListener('transitionend', toggleOpenActive));


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('active-nav');
    hamburger.removeAttribute('id', "hamburgerOnSection");
})


document.querySelector("#overlay").addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('active-nav');
    hamburger.id = "hamburgerOnSection";
})

/*
function closeSinExploration() {
    const sinExploration = document.getElementsByClassName("sin-exploration");
    sinExploration[0].style.opacity = 0;
    sinExploration[0].style.zIndex = -1;
}
*/

function openSection(x) {
    var sections = document.querySelectorAll("section");
    var i = 0;
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.remove("open-section");
    }
    sections[x].classList.add("open-section");
    nav.classList.remove("active-nav");
    hamburger.classList.remove("is-active");
    hamburger.id = "hamburgerOnSection";
    document.querySelector(".wrapper").style.display = "none";
}


