window.onload = function () {
  $(function () {
    $("#header").load("MENU.html");
    $("#footer").load("footer.html");
  });
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}

//
function moveBranch() {
  let value = document.getElementById("branchMove").value;
  let locationID = value.replace(/ /g, "").toLowerCase();
  document.getElementById(locationID).scrollIntoView();
}

// Modal Form
var modal = document.getElementById("bgModal");
var close = document.getElementById("close");

function popUp() {
  modal.style.display = "block";
}

close.onclick = function () {
  modal.style.display = "none";
};

// Payment
function confirm() {
  window.location = "../HTML/payment.html";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
