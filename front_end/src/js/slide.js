const scrollContainer = document.querySelector("#slideCard");
const scrollRightButton = document.querySelector("#next");
const scrollLeftButton = document.querySelector("#prev");

scrollRightButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 400, 
    behavior: "smooth"
  });
});

scrollLeftButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -400,
    behavior: "smooth"
  });
});

