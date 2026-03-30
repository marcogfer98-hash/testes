let saida = document.querySelector(".saida");

let nome = prompt("Digite o login: ");
let password = parseInt(prompt("Digite a senha: "));

let admin = "Admin";
let senha = 123;

if (nome + password != admin + senha) {
    alert("Acesso Negado!");
} else {
    saida.innerHTML = "Acesso para Administrador Liberado!";
}




