/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta 
*             ese numero. Realizarlo con los tres tipos de bucles.
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 2,4,6,....,n   
*
*   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
*
***************************************************************************************************************/
let numero
let i
numero= prompt('Escribe un numero')
for(i=0;i<numero;i++){
    if (i%2==0){
        document.write(`${i} ,`)
    }
}
//ayudaaaaaa