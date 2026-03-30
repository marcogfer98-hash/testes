let saida = document.querySelector(".saida");

let numero = parseInt(prompt("Digite um numero: "));




for (let count = 1; count <= 10; count++) {
    saida.innerHTML += "<br>" + numero + " x " + count + " = " + (numero * count);
}