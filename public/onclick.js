console.log("helloworld");

var logo = document.getElementById("logo");
console.log(logo);

logo.addEventListener("click", function () {
  window.open("http://www.maplevalleydaycamp.com/");
});

var logout = document.getElementById("logout");

if (logout) {
  logout.addEventListener("click", function () {
    res.redirect("/");
  });
}

var mod = document.getElementById("test");

if (mod) {
  mod.addEventListener("click", showModal);
}
function showModal() {
  var modEl = document.getElementById("modEl");
  modEl.classList.add("is-active");
}
