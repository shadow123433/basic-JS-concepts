function enviar() {
    const form = document.getElementById("form").value;
    

    const telefone = "27998040952";
    const mensagem = `Olá, estou sentindo ${form} e gostaria de falar com um profissional.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}