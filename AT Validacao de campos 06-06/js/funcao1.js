function validarCampos() {
    let erro = document.getElementById("erro");

    let nome = document.getElementById("campoNome");
    let nota1 = (document.getElementById("campoNota1").value);
    let nota2 = (document.getElementById("campoNota2").value);
    let nota3 = (document.getElementById("campoNota3").value);
    let nota4 = (document.getElementById("campoNota4").value);

    erro.innerHTML = "";

    if (nome.value === "") {
        erro.innerHTML = "Preencha seu nome corretamente!";
        nome.focus();
        return false;
    }

    if (nota1 === "" || isNaN(nota1) || nota2 === "" || isNaN(nota2) || nota3 === "" || isNaN(nota3) || nota4 === "" || isNaN(nota4)) {
        erro.innerHTML = "Preencha os campos das notas corretamente";
        return false;
    }

    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    nota4 = Number(nota4);

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
        erro.innerHTML = "As notas inseridas não são válidas!";
        return false;
    }

    calcularMedia(nota1, nota2, nota3, nota4);
    return true;
}

function calcularMedia(nota1, nota2, nota3, nota4) {
    let situacao = document.getElementById("situacao");
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        situacao.innerHTML = `Você está <span class=aprovado>APROVADO</span>! Sua média final é de <strong>${media.toFixed(2)}</strong>`;
    } else if (media < 7 && media >= 4) {
        situacao.innerHTML = `Você está em <span class=exame>EXAME</span>! Sua média final é de <strong>${media.toFixed(2)}</strong>`;
    } else {
        situacao.innerHTML = `Você está <span class=reprovado>REPROVADO</span>! Sua média final é de <strong>${media.toFixed(2)}</strong>`;
    }
}