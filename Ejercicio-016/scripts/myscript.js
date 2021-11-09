/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*
*
***************************************************************************************************************/

function compruebaPalindromo(cadenita){

    const NuevaCadenita = cadenita.replaceAll(` `, "").toLowerCase()  //con replace solo me cambia el primero y con replace all me pilla todos
    const cadenitaAlReves = NuevaCadenita.split(``).reverse().join(``)

    return NuevaCadenita === cadenitaAlReves ? `es palindromo`:`no es palindromo`

}

let frase=prompt('Escribe la frase a evaluar')
document.write(compruebaPalindromo(frase))

