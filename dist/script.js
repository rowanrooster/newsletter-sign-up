const signupContainer = document.getElementById("signup-container");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("form-inp");
const submitBtn = document.getElementById("form-btn");
const dismissBtn = document.getElementById("dismiss-btn");

const errorMsg = document.getElementById("error-msg");
const resultMsg = document.getElementById("result-msg");

emailInput.addEventListener("input", (e) => {
    if (emailInput.validity.valid) {
        errorMsg.textContent = "";
    } else {
        showError();
    }
});

signupForm.addEventListener("submit", (e) => {
    if (!emailInput.validity.valid || emailInput.validity.valueMissing) {
      showError();
      e.preventDefault();
    } 
    if(emailInput.validity.valid) {
        e.preventDefault();
        signupContainer.style.display = "none";
        resultMsg.style.display = "flex";
      } 
});

function showError() {
    if (emailInput.validity.valueMissing) {
        errorMsg.textContent = "You need to enter an email address.";
    } else if (emailInput.validity.typeMismatch) {
        errorMsg.textContent = "Entered value needs to be an email address.";
    } else if (emailInput.validity.tooShort) {
        errorMsg.textContent = `Email should be at least ${emailInput.minLength} characters.`;
    }  
    emailInput.classList.add("error");
    errorMsg.style.display = "block";
};

dismissBtn.addEventListener("click", () => {
    signupContainer.style.display = "flex";
    resultMsg.style.display = "none";
    signupForm.reset();
    emailInput.classList.remove("error");
    errorMsg.style.display = "none";
    submitBtn.disabled = true;
    emailInput.disabled = true;
    submitBtn.innerText = "Please check your email";
});
