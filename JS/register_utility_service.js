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

// Modal Message
var modalMessage = document.getElementById("modalSendSuccess");
var close_2 = document.getElementById("okClose");

function popUpMessage() {
  modal.style.display = "none";
  modalMessage.style.display = "block";
}

close_2.onclick = function () {
  modalMessage.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalMessage) {
    modalMessage.style.display = "none";
  }
};

//TICKED
var containerTick1 = document.getElementById("containerTick1");
var containerTick2 = document.getElementById("containerTick2");

function tick1() {
  let iconTicked1 =
    "<img class='ticked' id='ticked1' onclick='cancelTicked1()' title='Click to cancel' src='../images/ticked.png' />";
  let tick1 = document.getElementById("tick1");

  if (tick1.onclick) {
    containerTick1.innerHTML = iconTicked1;
  }

  document.getElementById("restaurant").style.display = "block";
}
function tick2() {
  let iconTicked2 =
    "<img class='ticked' id='ticked2' onclick='cancelTicked2()' title='Click to cancel' src='../images/ticked.png' />";
  let tick2 = document.getElementById("tick2");

  if (tick2.onclick) {
    containerTick2.innerHTML = iconTicked2;
  }

  document.getElementById("spa").style.display = "block";
}
function cancelTicked1() {
  let iconTick1 =
    "<span id='tick1' onclick='tick1()' title='Click to select'> + </span>";
  let ticked1 = document.getElementById("ticked1");
  if (ticked1.onclick) {
    containerTick1.innerHTML = iconTick1;
  }
  document.getElementById("restaurant").style.display = "none";
}
function cancelTicked2() {
  let iconTick2 =
    "<span id='tick2' onclick='tick2()' title='Click to select'> + </span>";
  let ticked2 = document.getElementById("ticked2");

  if (ticked2.onclick) {
    containerTick2.innerHTML = iconTick2;
  }
  document.getElementById("restaurant").style.display = "none";
}
