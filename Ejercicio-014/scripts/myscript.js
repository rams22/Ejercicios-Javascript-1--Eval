/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : números enteros: nfilas, ncols
*
*
*   Salida  : tabla html con nfilas y ncols
*
*
***************************************************************************************************************/

let filas=prompt(`introduce el numero de filas`)
let columnas=prompt(`introduce el numero de columnas`)
let tablita = []


for(let j=1;j<=filas;j++){

    for(i=1;i<=columnas;i++){
        let res=0
        res=j*i
        document.write(res+` , `)
        
        
    }
    document.write("<br>")
    
}






/*
function leerEntero(){

}const aleatorio=array.from({length:leerEntero()},()=>Math.floor(Math.random()*10))

let pares=aleatorios.filters
*/