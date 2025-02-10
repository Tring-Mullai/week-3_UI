let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn3");


function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie =` ${name}=${value}; expires=${date.toUTCString()}; path=/`;
}


btn.addEventListener("click", function (event) {
    event.preventDefault();

    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    
    if (emailValue === "" || passwordValue === "") {
        alert("Email and Password are required.");
        return;
    }

    
    setCookie("registeredEmail", emailValue, 7);
    setCookie("registeredPassword", passwordValue, 7);

    alert("Registration successful! You can now sign in.");
    window.location.href = "signIn.html"; 
});