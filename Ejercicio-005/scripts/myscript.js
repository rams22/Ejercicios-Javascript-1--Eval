/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la página HTML el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
*             ¿Cómo podemos limitar el número de decimales que se mostrarán?
*
***************************************************************************************************************/
let num1,num2;
num1= parseInt(prompt(`introduce un numero`)); //puse el parse int porque sino me lo concatenaba, 
num2= parseInt(prompt(`introduce otro numero`));
document.write(`la suma de ${num1}+${num2} es  -> `,num1+num2);//duda por que me concatena? como puedo hacerlo sin el parse int? o lo correcto es espicificar si es entero?
document.write(`<br>la resta de ${num1}-${num2} es -> `,num1-num2);
document.write(`<br>la multi de ${num1}x${num2} es -> `,num1*num2);
document.write(`<br>la divi de ${num1}/${num2} es -> `,num1/num2);




//duda