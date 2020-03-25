function menu(){
    let meny = document.querySelector(".menu");
    meny.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}

let btn = document.querySelector(".menu-button")
let layer = document.querySelector(".fade-layer");

btn.addEventListener("click", menu)
layer.addEventListener("click", menu)

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}