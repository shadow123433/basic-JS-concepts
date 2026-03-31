function logar() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === "admin" && senha === "admin") {
        alert('Login bem-sucedido!');
        location.href = "home.html";
    } else {
        alert('Login ou senha incorretos. Tente novamente.');
    }


}