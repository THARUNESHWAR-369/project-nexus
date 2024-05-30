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

function postRequest(url, data) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.status_code !== 200) {
                handleErrorContainer(true, data.message);

            } else {
                handleErrorContainer(false, data.message, "Success");
              
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1000);

            }
        })
        .catch((err) => {
            handleErrorContainer(true, "An error occurred");
        });
}


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

    else if (!isValidEmail(email)) {
        handleErrorContainer(true, "Invalid email format");
        return;
    }

    else if (!isValidPassword(password)) {
        handleErrorContainer(true, "Password must be at least 6 characters long");
        return;
    }

    else {
        // handleErrorContainer(false, "Login successful", "Success");
        postRequest("/login", { email, password });
    }
});

signupBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("sg-username").value;
    const email = document.getElementById("sg-email").value;
    const password = document.getElementById("sg-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!email || !password || !confirmPassword || !name) {
        handleErrorContainer(true, "Please fill in all fields");
        return;
    }

    else if (!isValidEmail(email)) {
        handleErrorContainer(true, "Invalid email format");
        return;
    }

    else if (!isValidPassword(password)) {
        handleErrorContainer(true, "Password must be at least 6 characters long");
        return;
    }

    else if (password !== confirmPassword) {
        handleErrorContainer(true, "Passwords do not match");
        return;
    }

    else {
        // handleErrorContainer(false, "Signup successful", "Success");
        postRequest("/signup", { name, email, password });
    }
});









