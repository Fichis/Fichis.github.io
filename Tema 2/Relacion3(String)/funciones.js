//! Ejercicio 1.1
function invierteCadena(cad_arg){
    let reversa = "";
    for (let i = cad_arg.length - 1; i >= 0; i--) {
      reversa += cadena[i];
    }
    return reversa;
}

//! Ejercicio 1.2
function inviertePalabras(cad_arg){
    let palabras = cad_arg.split(" ");
    let reversa = "";
    for(let i = 0; i < palabras.length; i++){
        reversa += " ";
        for(let j = palabras[i].length - 1; j >= 0; j--){
            reversa +=palabras[i][j];
        }
    }
    return reversa;
}

//! Ejercicio 1.3
function encuentraPalabraMasLarga(cad_arg){
    let palabras = cad_arg.split(" ");
    let arrContador = [];
    let contador = 0;
    let indiceMayor = 0;
    let palabraMayor;
    for(let i = 0; i < palabras.length; i++){
        for(let j = 0; j < palabras[i].length; j++){
            contador++;
        }
        arrContador.push(contador);
        contador = 0;
    }
    for(let i = 0; i < arrContador.length; i++){
        if(indiceMayor < arrContador[i]){
            indiceMayor = arrContador[i];
            palabraMayor = palabras[i];
        }
    }

    return palabraMayor;
}

//! Ejercicio 1.4
function filtraPalabrasMasLargas(cad_arg, i){
    let palabras = cad_arg.split(" ");
    let contadorPalabra = 0;
    let contadorResultado = 0;
    for (let iteracion = 0; iteracion < palabras.length; iteracion++){
        for(let j = 0; j < palabras[iteracion].length; j++){
            contadorPalabra++;
            console.log("ContadorPalabra: " + contadorPalabra);
        }
        if (contadorPalabra >= i) {
          contadorResultado++;
        }
        contadorPalabra = 0;
        console.log(contadorResultado);
    }
    return contadorResultado;
}

//! Ejercicio 1.5
function cadenaBienFormada(cad_arg){
    let resultado = "";
    for(let i = 0; i < cad_arg.length; i++){
        if(i == 0){
            resultado +=cad_arg[i].toUpperCase();
            i++;
        }
        resultado += cad_arg[i].toLowerCase();
    }
    return resultado;   
}

//! Ejercicio 2
function mayusOMinus(cad_arg){
    let resultado = "";
    if(cad_arg == cad_arg.toUpperCase()){
        resultado = "La cadena está formada sólo por mayúsculas.";
    }else if (cad_arg == cad_arg.toLowerCase()){
        resultado = "La cadena está formada sólo por minúsculas.";
    }else {
        resultado = "La cadena está formada por una mezcla de mayúsculas y minúsculas"
    }
    return resultado;
}

//! Ejercicio 3
function apariciones(cad_arg, subcad_arg){
    let contador = 0;
    let visor = "";
    for(let i = 0; i <= (cad_arg.length - subcad_arg.length); i++){
        for(let j = i; j < (i+subcad_arg.length); j++){
            visor += cadena.charAt(j);
        }
        if(subcad_arg == visor){
            contador++;
        }
        visor = "";
    }
    return contador;
}