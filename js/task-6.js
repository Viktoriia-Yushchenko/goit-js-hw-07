function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberOfElements = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", createElements);
destroy.addEventListener("click", destroyElements);

function createElements(event) {
  const amount = numberOfElements.value;
  if (amount >= 1 && amount <= 100) {
    destroyElements(); 
    createBoxes(amount);
    numberOfElements.value = ""; 
  }
}

function createBoxes(amount) {
  let boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
}

function destroyElements(event) {
  boxes.innerHTML = "";
}
