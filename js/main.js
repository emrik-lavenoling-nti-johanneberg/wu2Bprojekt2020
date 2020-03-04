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