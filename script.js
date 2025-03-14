//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existingButton.style.display = "block";
    }

    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });

    existingButton.addEventListener("click", () => {
        const savedUsername = localStorage.getItem("username");
        alert(`Logged in as ${savedUsername}`);
    });
});