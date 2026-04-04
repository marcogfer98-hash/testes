function clicou() {
    let title = document.querySelector(".titulo");
    let input = document.querySelector(".campo");

    if (input.value != "") {
        title.innerHTML = "Olá, " + input.value;
        input.value = "";
    } else {
        alert("Preencha o seu nome.");
    }
}

let button = document.querySelector("button");
button.addEventListener("click", clicou);