const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");
const goToSignup = document.getElementById("go-to-signup");
const goToLogin = document.getElementById("go-to-login");

const errorCont = document.getElementById("error-cont");

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

let errorId = 1;

const togglePasswordVisibility = (container) => {
  const input = container.querySelector("input");
  const icon = container.querySelector(".material-symbols-outlined");

  icon.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "visibility";
    } else {
      input.type = "password";
      icon.textContent = "visibility_off";
    }
  });
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  return password.length >= 6;
};

const handleErrorContainer = (isError, body, header = "Error") => {
  const errorContainer = `
    <div class="error-container" id="error-container-${errorId}">
      <div class="${isError ? "error-header" : "success-header"}">
        <p>${header}</p>
        <span class="material-symbols-outlined close-error-container" data-error-id="${errorId}">close</span>
      </div>
      <div class="error-body">
        <p>${body}</p>
      </div>
    </div>
  `;

  const div = document.createElement("div");
  div.innerHTML = errorContainer;

  errorCont.appendChild(div);

  const closeErrorCont = document.querySelectorAll(".close-error-container");
  closeErrorCont.forEach((element) => {
    element.addEventListener("click", (event) => {
      const errorId = event.target.getAttribute("data-error-id");
      const errorContainer = document.getElementById(
        `error-container-${errorId}`
      );
      errorContainer.remove();
    });
  });

  errorId++;
};

document.querySelectorAll(".eye-container").forEach(togglePasswordVisibility);

goToSignup.addEventListener("click", (event) => {
  signupForm.classList.remove("signup-hidden");
  loginForm.classList.add("login-hidden");
});

goToLogin.addEventListener("click", (event) => {
  loginForm.classList.remove("login-hidden");
  signupForm.classList.add("signup-hidden");
});

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("lg-email").value;
  const password = document.getElementById("lg-password").value;

  if (!email || !password) {
    handleErrorContainer(true, "Please fill in all fields");
    return;
  }

  if (!isValidEmail(email)) {
    handleErrorContainer(true, "Invalid email format");
    return;
  }

  if (!isValidPassword(password)) {
    handleErrorContainer(true, "Password must be at least 6 characters long");
    return;
  }

  handleErrorContainer(false, "Login successful", "Success");
});

signupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("sg-email").value;
  const password = document.getElementById("sg-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!email || !password || !confirmPassword) {
    handleErrorContainer(true, "Please fill in all fields");
    return;
  }

  if (!isValidEmail(email)) {
    handleErrorContainer(true, "Invalid email format");
    return;
  }

  if (!isValidPassword(password)) {
    handleErrorContainer(true, "Password must be at least 6 characters long");
    return;
  }

  if (password !== confirmPassword) {
    handleErrorContainer(true, "Passwords do not match");
    return;
  }

  handleErrorContainer(false, "Signup successful", "Success");
});
