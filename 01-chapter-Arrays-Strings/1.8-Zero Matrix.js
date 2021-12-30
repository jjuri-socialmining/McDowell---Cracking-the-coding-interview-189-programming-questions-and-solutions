console.clear();
/**
 * Type: Basic
 * 
 * 
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to O.

Intentos 1 pero con mejora de codigo:
2020-10-08 08:56:21
2020-10-08 11:08:16

Logica:
1) Crear un buscador que encuentroe un 0 en la matriz
2) eliminar la matrix dependiendo el tamano

Lecciones aprendidas
1) Cuidado de poner j dentro de otra propiedad
2) Agregar for horizontalmente
*/




var table = [
    [1,2,3,4],    
    [5,6,3,8],
    [9,10,11,12],
    [13,14,15,16]
]

function setMatriz(matriz){


    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            if(matriz[i][j]==0){
                return(setMatriz0(matriz))
                break;

            }
            //console.log(matriz[i][j])
        }
    }
return matriz;
}
function setMatriz0(matriz){
       const { length } = matriz;
      var defaultValue = 0;
      var row = [];
      var matriz = [];

    for (var i=0; i < length; i++) { row.push(defaultValue); }
    for (var i=0; i < length; i++) { matriz.push(row); }
    return matriz
}


console.table(setMatriz(table));
//setMatriz(table)*/



/*** Tools
 * function defaultMatrix(size) { 
    var defaultValue = 0;
    var row = [];
    var matrix = [];
    for (var i=0; i < size; i++) { row.push(defaultValue); }
    for (var i=0; i < size; i++) { matrix.push(row); }
    return matrix;
}

console.table(defaultMatrix(4));


 */