
console.log("helloworld");

var logo = document.getElementById("logo");
console.log(logo); 

logo.addEventListener("click", function(){ window.open("http://www.maplevalleydaycamp.com/")});

var mod = document.getElementById("test")

if(mod){
mod.addEventListener("click", showModal);
}
function showModal() {
    var modEl = document.getElementById("modEl");
    modEl.classList.add("is-active");
}