const signupContainer = document.getElementById("signup-container");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("form-inp");
const submitBtn = document.getElementById("form-btn");
const dismissBtn = document.getElementById("dismiss-btn");

const errorMsg = document.getElementById("error-msg");
const resultMsg = document.getElementById("result-msg");
const successMsg = document.getElementById("success-msg");

// check input
emailInput.addEventListener("input", (e) => {
    if (emailInput.validity.valid) {
        errorMsg.textContent = "";
        emailInput.classList.remove("error");
    } else {
        showError();
    }
});

// check input on submit
signupForm.addEventListener("submit", (e) => {
    if (!emailInput.validity.valid || emailInput.validity.valueMissing) {
      showError();
      e.preventDefault();
    } 

    // show success message if valid input
    if(emailInput.validity.valid) {
        e.preventDefault();
        signupContainer.style.display = "none";
        resultMsg.style.display = "flex";
        let emailMsg = emailInput.value;
        successMsg.innerHTML = `A confirmation email has been sent to <strong>${emailMsg}</strong>. Please open it and click the button inside to confirm your subscription.`;
      } 
});

// show error message
function showError() {
    if (emailInput.validity.valueMissing) {
        errorMsg.textContent = "Please enter an email address.";
    } else if (emailInput.validity.typeMismatch) {
        errorMsg.textContent = "Please enter a valid email address.";
    } else if (emailInput.validity.tooShort) {
        errorMsg.textContent = `Email should be at least ${emailInput.minLength} characters.`;
    }  
    emailInput.classList.add("error");
    errorMsg.style.display = "block";
};

// dismiss success message and return
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
