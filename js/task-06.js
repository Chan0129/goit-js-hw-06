const input = document.getElementById("validation-input");

input.addEventListener("blur", function (event) {
  const inputValue = event.target.value;
  const expectedLength = parseInt(event.target.getAttribute("data-length"));
  if (inputValue.length === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
