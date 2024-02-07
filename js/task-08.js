document.querySelector(".login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert("Please fill in the fields.");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);

  form.reset();
});
