/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*
***************************************************************************************************************/
function leerEntero(msg) { //msg es para el mensaje dame un numero entero que puse abajo
    let numero;
 
    do {
         numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
    return parseInt(numero)
 }
 
 let num1=leerEntero("Dame un numero entero")
 let num2
 do {
     num2=leerEntero("Dame un numero entero")
 } while (num2<num1)
 
 /*
 salida=""
 for (let i=num1;i<=num2;i++) 
     salida+=`<p>El cuadrado de ${i} es: ${Math.pow(i,2)}</p>`
 document.write(salida)
 */
 
 let vector=Array.from({length:num2-num1+1},(el,i)=>num1+i)
 console.log(vector.map(el=>el*el).join(","))
 
 /*
 let cuadrados=vector.map(function doblar(el) {
     return el*el
 })
 */



/*-------------------------------antes de ser corregido -------------------------------------------------------------------
let num1,num2
num1=prompt('introduce un nº entero')
num2=prompt('introduce un nº entero')

String.repeat(num22>num1){
    if(num1>=num2){document.write(`Error! El segundo numero debe ser mayor que el primero`)}
    num1=prompt('introduce un nº entero')
    num2=prompt('introduce un nº entero')

}
for(num1-1;num1=num2;num1++){
    document.write(`El cuadrado de ${num1} es: ${num1^2}`)

}

//Duda!!!!!!!!!!!!

*/