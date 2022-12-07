window.onload = function () {
  $(function () {
    $("#header").load("MENU.html");
    $("#footer").load("footer.html");
  });
};

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

// Change branch
function changeBranch() {
  let branch = document.getElementById("branchBooking").value;
  window.location =
    "../HTML/roomdetail" + branch.toLowerCase().replace(/ /g, "") + ".html";
}
