/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/
let cadenita 
let cancelar='cancelar'
let anadirCaja//para añadir un nuevo elemento al array
let array = []
//
while(cadenita!=cancelar) {
    cadenita=prompt('Introduce una cadena');
    anadirCaja = array.push(cadenita);

}
for(let i=0;i<=array.length;i++){
    document.write(array[i]+' ')
}



//hacer un for para mostrar cada elemento introducido