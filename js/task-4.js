const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (elements.email.value === "" || elements.password.value === "") {
    return alert("All form fields must be filled in");
  }
  console.log(info);
  form.reset();
}
