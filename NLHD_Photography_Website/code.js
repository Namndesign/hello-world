function openLightbox() {
    document.getElementById("portfolio-lightbox").style.display = "flex";
}
function closeLightbox() {
    document.getElementById("portfolio-lightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(a) {
    showSlides(slideIndex += a);
}

function currentSlide(a) {
    showSlides(slideIndex = a);
}

function showSlides(a) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (a > slides.length) { slideIndex = 1 }
    if (a < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}





function openSection(b) {
    var section = document.getElementsByTagName("section");
    var i;
    for (i = 0; i < section.length; i++) {
        section[i].style.display = "none";
    }
    section[b].style.display = "flex";
}



function toggleNav() {
    var i = document.getElementById("mobile-nav-link");
    if (i.style.display === "block") {
        i.style.display = "none";
    } else {
        i.style.display = "block";
    }
}