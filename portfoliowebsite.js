var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function singMap() {
    var singapore = {lat: 1.3295536, lng: 103.7739801}
    var sgMap = new SVGFEMorphologyElement.maps.Map(dpcument.getElementById("sgmap"), {
        zoom: 4,
        center: singapore
    });
    var sgMarker = new SVGFEMorphologyElement.maps.Marker ({
        position: singapore,
        map: sgMap
    });
}