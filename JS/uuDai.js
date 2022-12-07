window.onload = function () {
  $(function () {
    $("#header").load("MENU.html");
    $("#footer").load("footer.html");
  });
};

const element = document.getElementsByClassName("item");
for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function () {
    window.location = "../HTML/promotionDetail" + (i + 1) + ".html";
  });
}
