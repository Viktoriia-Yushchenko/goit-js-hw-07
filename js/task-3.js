const userName = document.querySelector("#name-input");
const outputSpan = document.querySelector("#name-output");

userName.addEventListener("input", () => {
    const trimmedValue = userName.value.trim();
    outputSpan.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});