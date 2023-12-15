document
  .querySelectorAll(".card_footer-circle, .card_footer-circle-2")
  .forEach(function (element) {
    element.addEventListener("click", function () {
      var shareComponent = document.getElementById("cardPopup");
      var isDisplayed = shareComponent.style.display === "flex";
      shareComponent.style.display = isDisplayed ? "none" : "flex";
    });
  });
