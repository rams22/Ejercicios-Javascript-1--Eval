/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/

//1) Solicita un entero y un contador i

let entero=prompt('escribe un numero')

//2) 
for(let i=0;i<=entero;i++){

    for(let j=0;j<i;j++){
        document.write(i+" ")
    }
    document.write("<br>")
    
}