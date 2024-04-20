// Function to show login form and hide sign-up form
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

// Function to show sign-up form and hide login form
function showSignUpForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

// Function to handle login form submission
function handleLoginForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        // Add your code to redirect or perform any actions after successful login
    } else {
        alert("Invalid username or password.");
    }
}

// Function to handle sign-up form submission
function handleSignUpForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Sign up successful! You can now log in.");
    // Optionally, you can automatically switch to the login form after sign up
    showLoginForm();
}

// Add event listeners to buttons to show the corresponding forms
document.getElementById("login-button").addEventListener("click", showLoginForm);
document.getElementById("signup-button").addEventListener("click", showSignUpForm);

// Add event listeners to form submissions
document.getElementById("login-form").addEventListener("submit", handleLoginForm);
document.getElementById("signup-form").addEventListener("submit", handleSignUpForm);

// Function to handle login form submission
function handleLoginForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        clearPageContent(); // Delete everything from the page
        displayComingSoon(); // Display "Coming Soon" text
        // Add your code to redirect or perform any actions after successful login
    } else {
        alert("Invalid username or password.");
    }
}

// Function to handle sign-up form submission
function handleSignUpForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Sign up successful! You can now log in.");
    clearPageContent(); // Delete everything from the page
    displayComingSoon(); // Display "Coming Soon" text
    // Optionally, you can automatically switch to the login form after sign up
    showLoginForm();
}

// Function to delete everything from the page
function clearPageContent() {
    document.body.innerHTML = "";
}

// Function to display "Coming Soon" text
function displayComingSoon() {
    const comingSoonText = document.createElement("h1");
    comingSoonText.textContent = "Coming Soon";
    document.body.appendChild(comingSoonText);
}

// Add event listeners to buttons to show the corresponding forms
document.getElementById("login-button").addEventListener("click", showLoginForm);
document.getElementById("signup-button").addEventListener("click", showSignUpForm);

// Add event listeners to form submissions
document.getElementById("login-form").addEventListener("submit", handleLoginForm);
document.getElementById("signup-form").addEventListener("submit", handleSignUpForm);

