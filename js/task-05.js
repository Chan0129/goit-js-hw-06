document
  .getElementById("name-input")
  .addEventListener("input", function (event) {
    const name = event.target.value;
    const nameOutput = document.getElementById("name-output");
    nameOutput.textContent = name || "Unknown";
  });
