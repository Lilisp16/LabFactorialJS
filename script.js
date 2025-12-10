
const input = document.getElementById("input")
const spanN = document.getElementById("nIngresado")
const boton = document.getElementById("calcular")
let salidaSpan = document.getElementById("factorial");





boton.addEventListener("click" , () => { 
    let numero = Number(input.value);
    input.value = "";


    if(isNaN(numero) || numero < 0){
        alert("Por favor ingrese un numero valido")

    }else{
        spanN.textContent = `Numero Ingresado: ${numero}`;
    }


    const resultado = factorial(numero);
    salidaSpan.textContent = `El factorial de ${numero} = ${resultado}`

})

function factorial(numero){
    if (numero === 0 || numero == 1){
        return 1;

    }else{
        let salida = 1;
        for(let i = 2; i <= numero; i++){
            salida *= i;
        }
        
        return salida;
    }
}



