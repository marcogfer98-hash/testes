let a, b, c;
let saida = document.getElementById("saida");

a = 10;
b = 10;
c = 11;

saida.innerHTML = "Menor = " + (a < b) + "<br>Menor ou Igual = " + (a <= b) + "<br>Maior = " + (c > b) + "<br>Maior ou Igual = " + (c >= b);