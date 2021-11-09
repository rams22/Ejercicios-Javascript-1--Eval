/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*
***************************************************************************************************************/
let texto=prompt(`escribe un texto`)
let palabra=prompt(`escribe una palabra`)
function sinEspacios(msg){
    let array =[]
    for(let i=0; i<msg.length;i++){

        if (msg[i] != ' '){
            array.push(msg[i])
        }
        return array.join('')
    }
    
}


/*otra funcion para eliminar espacios:

function noSpace(text){
    let array =text.split('').filter(char => != ' '); //Comentario: esta funcion , el split convierte la cadena en un array de valores separados, y filter filtra todos los char que sean distintos de espacio
    return array.join(''); //vuelvo a convertir el array en una cadena
}
*/