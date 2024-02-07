const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const createBoxes = (amount) => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Clear previous boxes

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    // Update dimensions for the next box
    width += 10;
    height += 10;
  }
};

const destroyBoxes = () => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Clear all boxes
};

document.querySelector("[data-create]").addEventListener("click", () => {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = parseInt(amountInput.value, 10);
  createBoxes(amount);
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
