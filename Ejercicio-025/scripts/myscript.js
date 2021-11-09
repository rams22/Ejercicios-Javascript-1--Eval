/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número tras otro al usuario hasta que ingresamos el númoer 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*
***************************************************************************************************************/
function hastaQueSea0(num){
    let array=[]
    do{        
        num=prompt(`teclea un numero`)
        if (num!=0){
            array.push(num)
        }
    }while(num!=0)
    return array
    
        
}
 let numero= hastaQueSea0()
 


let guardaNumero=array(0) 
for (let i=1;i<array.length;i++){
    document.write(array(i))
    document.write(' ')
    if (guardaNumero>array(i)){

        guardaNumero=array(i)
    }
    
}
document.write(`El numero mas grande es: ${guardaNumero}`)

//**********************************************duda***************************************