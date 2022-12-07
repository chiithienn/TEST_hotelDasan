window.onload = function () {
  $(function () {
    $("#header").load("MENU.html");
    $("#footer").load("footer.html");
  });
};

document.querySelector(".HCM").style.display = "none";
document.querySelector(".HN").style.display = "none";
document.querySelector(".DN").style.display = "none";
document.querySelector(".PT").style.display = "none";

function selectBranch() {
  let value = document.getElementById("chinhanh").value;

  if (value == "TPHCM") {
    document.querySelector(".HCM").style.display = "";
    document.querySelector(".HN").style.display = "none";
    document.querySelector(".DN").style.display = "none";
    document.querySelector(".PT").style.display = "none";
  } else if (value == "Hanoi") {
    document.querySelector(".HN").style.display = "";
    document.querySelector(".HCM").style.display = "none";
    document.querySelector(".DN").style.display = "none";
    document.querySelector(".PT").style.display = "none";
  } else if (value == "Danang") {
    document.querySelector(".DN").style.display = "";
    document.querySelector(".HCM").style.display = "none";
    document.querySelector(".HN").style.display = "none";
    document.querySelector(".PT").style.display = "none";
  } else {
    document.querySelector(".PT").style.display = "";
    document.querySelector(".HCM").style.display = "none";
    document.querySelector(".HN").style.display = "none";
    document.querySelector(".DN").style.display = "none";
  }

  // window.scrollTo(0, document.body.scrollHeight);
}

let elements = document.getElementsByClassName("button");
for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    $(function () {
      $("#formHoiNghi").load("../HTML/formhoinghi.html");
    });
  };
}
