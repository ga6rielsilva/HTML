function validateEmail() {
    let email = document.getElementById("email");
    let alertEmail = document.getElementById("alert-email");

    var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // RegEx para verificar se é um e-mail válido

    if (email.value.length > 0 && !validEmail.test(email.value)) {
        alertEmail.innerHTML = "Preencha seu e-mail corretamente.";
        return false;
    }
    
    alertEmail.innerHTML = "";
    return true;
}

function validatePassword() {
    let alertPassword = document.getElementById("alert-password");
    let password = document.getElementById("password");
    if (password.value.length > 0 && password.value.length < 4) {
        alertPassword.innerHTML = "Sua senha é muita curta.";
        return false;
    } else {
        alertPassword.innerHTML = "";
        return true;
    }
}

function authenticate() {
    let emailValid = validateEmail();
    let passwordValid = validatePassword();
    let email = document.getElementById("email");
    let alertLogin = document.getElementById("alert-login");
    let password = document.getElementById("password");

    if (!emailValid || !passwordValid) {
        return false;
    }

    if (email.value === "gabriel@example.com" && password.value === "12345") {
        alertLogin.style.color = "green";
        alertLogin.innerHTML = "Autenticado com sucesso!";
        return true;
    } else {
        alertLogin.style.color = "red";
        alertLogin.innerHTML = "Credenciais incorretas.";
        return false;
    }
}