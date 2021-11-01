/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
*
*
*   Entrada : edad
*
*
*   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
*             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
*             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
*
*   Notas   : Debemos comprobar que la edad sea un número entero mayor que 0 (sino indicaremos el error)
*             La edad no puede ser superior a 120
*
***************************************************************************************************************/

let edad;
edad=prompt(`ingresa tu edad`)
if (edad<30){
        console.log(`Ponte a currar vago`)
    }
    if (edad>=30&&edad<=64){
        console.log(`Que hanas de jubilarme`)
    }
    if (edad>64){
        console.log(`descansa abuelete`)
    }else{
    if (edad>120){
        console.log(`menudo trolas es imposible menos de 0`)
    }}