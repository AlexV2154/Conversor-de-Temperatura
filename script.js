//VARIABLES GLOBALES
const cantidad = document.getElementById('cantidad')
const unidadOrigen = document.getElementById('unidadOrigen')
const unidadDestino = document.getElementById('unidadDestino')
const resultadoDisplay = document.getElementById('resultado')
const btnRes = document.getElementById('convertir')


function aKelvin(valor, unidad){
    if(unidad === 'celsius'){
        return valor + 273.15

    }else if(unidad === 'fahrenheit'){
        return (valor - 32) * 5/9 + 273.15
    }else if(unidad === 'rankine'){
        return valor * 5/9
    }else if(unidad === 'kelvin'){
        return valor
    }

}

function desdeKelvin(kelvin, nuevaUnidad){
    if(nuevaUnidad === 'celsius'){
        return kelvin - 273.15

    }else if(nuevaUnidad === 'fahrenheit'){
        return (kelvin - 273.15) * 9/5 + 32
    }else if(nuevaUnidad === 'rankine'){
        return kelvin * 1.8
    }else if(nuevaUnidad === 'kelvin'){
        return kelvin
    }
}

function convertirUnidad(){
    const inputCantidad = parseFloat(cantidad.value)
    const unidadOrigenSel = unidadOrigen.value
    const unidadDestinoSel = unidadDestino.value

    const valorKelvin = aKelvin(inputCantidad, unidadOrigenSel)
    const resultado = desdeKelvin(valorKelvin, unidadDestinoSel)

    resultadoDisplay.textContent = `Resultado: ${resultado.toFixed(2)}`;

    cantidad.value = ''

    if(isNaN(inputCantidad)){
        resultadoDisplay.textContent = `Ingrese un numero primero`;
    }
}

btnRes.addEventListener('click', convertirUnidad)
