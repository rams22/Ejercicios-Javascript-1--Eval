/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 0,1,2,3,4,5,....,n
*
*
***************************************************************************************************************/
let num1;
let i=0;
num1=prompt(`introduce un numero entero`)
for (i;num1>i;i++){
    console.log(i) 
    document.write(i,', ')
}
document.write(i) //esto es para evitar que despues del ultimo numero me ponga una coma " 0,1,2, "porque quedaria feo

//duda el console log me salta de lineas, deberia ir seguido o eso me pide el ejercicio