function enviar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "admin@gmail.com" && senha === "admin123") {
        alert("Login bem-sucedido!");
        window.location.href = "page.html";
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
}



function enviarsegundoformulario() {
    const numero = document.getElementById("numero").value;
    const endereço = document.getElementById("endereço").value;

    if (numero === "12345" && endereço === "Rua Principal") {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Número ou endereço incorretos. Tente novamente.");
    }   
}