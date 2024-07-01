const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

button.addEventListener("click", createChangeColor);
function createChangeColor(event){

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  body.style.backgroundColor = getRandomHexColor();
  const newColor = body.style.backgroundColor;
  colorName.innerHTML = newColor;
}
