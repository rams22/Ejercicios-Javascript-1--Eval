/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores. Se empieza con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*
***************************************************************************************************************/

let num=prompt(`escribe el numero`)
let array=[]
let acumulado=1,anterior=0; //0+1=1 1+1=2 2+1=3 3+2=5 5+3
for(let i=1; i<=num;i++){
    anterior=acumulado
    acumulado=acumulado+anterior
    document.write(acumulado+',')


}