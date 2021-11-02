/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos un número mientras no esté entre 1 y 9. 
*             Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 < numero < 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota: Formatea la salida en el documento HTML empleando *         una tabla con 4 columnas y nueve filas
*
***************************************************************************************************************/

let num,i;
i=0;
num=prompt(`Introduce un numero`)

for(i=1;i>=1&&i<=9;i++){
    
    document.write(`${num}*${i}= ${i*num}<br>`)
    console.log(`${num}*${i}= ${i*num}`)
    

}