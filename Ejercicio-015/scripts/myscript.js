/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario una cadena de texto y mostrar el número de vocales
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Número de vocales (p.j: 8)
*
*
***************************************************************************************************************/
function contarVocales(mensaje){


    return mensaje.replace(/[^aeiouAEIOU]/g,"" ).length //meto la funcion.replace sobre la vari mensaje y le asigno los criterios de busqueda, para que todo lo distinto "^" de vical me lo remplace por una cadena vacia. La g es de global, para que le afecte a todas

}




let cadenita=prompt(`Escribe un texto`)
document.write(cadenita+'<br>')

document.write(contarVocales(cadenita))

