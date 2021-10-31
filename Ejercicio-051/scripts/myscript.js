/***************************************************************************************************************
*  
*   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
//lo hizo el profe en clase

const vector=[]

const persona ={
    nombre="Pepe",
    edad=35,
    mayorDeEdad: function(){
        return this.edad>=18
    }
}

console.log(persona.nombre)
console.log(persona.mayorDeEdad())