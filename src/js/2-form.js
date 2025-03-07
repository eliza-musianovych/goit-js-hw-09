const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

form.addEventListener("input", addToDataForm);

function addToDataForm (event) {
    event.preventDefault();
    if(event.target.name === "email" || event.target.name === "message") {
        formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
}

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    email.value = formData.email;
    message.value = formData.message;
};

form.addEventListener("submit", (event) => {
event.preventDefault();

if (email.value.trim() === "" || message.value.trim() === "") {
    return alert("Fill please all fields");
}
console.log(formData);
localStorage.removeItem("feedback-form-state")
form.reset();
});

document.addEventListener("DOMContentLoaded", () => {

    email.addEventListener("focus", () => {
      email.setAttribute("placeholder", "Type area");
    });
    email.addEventListener("blur", () => {
      email.removeAttribute("placeholder");
    });
  
    message.addEventListener("focus", () => {
      message.setAttribute("placeholder", "Type area");
    });
    message.addEventListener("blur", () => {
      message.removeAttribute("placeholder");
    });
  });
  