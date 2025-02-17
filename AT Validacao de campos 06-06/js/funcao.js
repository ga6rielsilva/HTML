function validarCampos () {
    document.getElementById('resultado').innerHTML = ""

    if (document.getElementById('escolha').value < 1 || document.getElementById('escolha').value > 5) {
        document.getElementById('escolha').value = ""
    } else {
        return calculo()
    }  
}

function calculo() {
    let num1, num2, resultado
    let escolha = parseInt(document.getElementById('escolha').value)

    switch (escolha) {
        case 1:
            num1 = parseFloat(prompt("Informe um numero"))
            resultado = Math.sqrt(num1)
            break
        case 2:
            num1 = parseFloat(prompt("Informe o segundo numero"))
            num2 = parseFloat(prompt("Informe o segundo numero"))
            resultado = Math.max(num1, num2)
            break
        case 3:
            num1 = parseFloat(prompt("Informe um número para ser a base"))
            num2 = parseFloat(prompt("Informe outro número para ser o expoente"))
            resultado = Math.pow(num1, num2)
            break
        case 4:
            num1 = parseFloat(prompt("Informe um número para ser a base"))
            num2 = parseFloat(prompt("Informe outro número para ser o expoente"))
            resultado = num1 + num2
            break
        case 5:
            resultado = prompt("Escreva uma frase para converter em maiúsculas").toLocaleUpperCase()
            break
        default:
            alert("Informe um número válido entre 1 e 5.")
            break
    }

    document.getElementById('resultado').innerText = "Resultado: = " + resultado
}
