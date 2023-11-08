console.log("Akses masuk");

// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Cara ngilangin sidebar hamburger ketika ngeklik selain area logo hamburger

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Menyembunyikan navbar ketika di scroll
