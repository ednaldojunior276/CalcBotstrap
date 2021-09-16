let resultado
let valor

    function botao(num) {
        valor = document.calculadora.numeros.value += num
      
    }

    function apagar() {
        document.calculadora.numeros.value  = " "
    }

    function calc() {
        resultado = eval(valor)
        document.calculadora.numeros.value = resultado
    }

