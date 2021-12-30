console.clear();
/**
 * Type: Advanced

 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. (an you do this in place?
Hints: #51, #100
2020-09-28 14:56:03

* Crear una matriz
* Repasar el llenado de una matriz iniciar con fill
* 
Nested Loops & 2D Arrays

2020-09-29 09:14:01 //Fail


// Assign variables from objets
// Assign variables from nested objects
// Assign Variables from arrays
// Rest Operator to Reassign Array Elements

Tercer intenedo
2020-09-29 15:08:43
2020-09-29 15:55:37  Fail


*/


var rotateMatrix = function(matrix) {
    var edge = matrix.length - 1;
  
    var movePixels = function(row, col) {
      // starts at m[row][col]
      // moves to m[col][edge - row]
      var fromRow;
      var fromCol;
      var fromPixel;
  
      // first transformation
      var toRow = row; // 0
      var toCol = col; // 1
      var toPixel = matrix[row][col];
  
      // Do rotational transformation 4 times
      for (var i = 0; i < 4; i++) {
        fromRow = toRow;
        fromCol = toCol;
        toRow = fromCol;
        toCol = edge - fromRow;
  
        //voy moviendo en uno en uno hasta dejar el pixel en la casilla que corresponde
        fromPixel = toPixel;
        toPixel = matrix[toRow][toCol];
        matrix[toRow][toCol] = fromPixel;
      }
    };
  
    for (var i = 0; i < matrix.length / 2; i++) {
      for (var j = i; j < edge - i; j++) {
        console.log(i, j);
        movePixels(i, j);
      }
    }
  };
  
  
  /* TEST */
  var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];
  
  console.log('before:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);
  
  rotateMatrix(testMatrix);
  
  console.log('after:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);
  
  /*
  var edge = n - 1;
  
  pattern observed:
  i) col value becomes row value
  ii) row value is subtracted off edge and becomes col value
  
  0100
  0000
  0000
  0000
  
  position of 1 -> m[0][1]
  
  0000
  0001
  0000
  0000
  
  position of 1 -> m[1][edge]
  
  0000
  0000
  0000
  0010
  
  position of 1 -> m[edge][edge - 1]
  
  0000
  0000
  1000
  0000
  
  position of 1 -> m[edge-1][0]
  
  0100
  0000
  0000
  0000
  
  position of 1 -> m[0][1]
  
  flow of iteration:
  i) start from top left corner and move diagonally down
  ii) for each row, iterate pixels until edge - 1 
  (pixel at edge would have been transformed by the first pixel)
  iii) at each pixel iteration, iterate through 4 sides
  iv) do iteration in place, i.e. store a temp pixel for moving things around
  */



/////////////////////////////////////////
// var table = [
//     [1,2,3,4],    
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
//     ]

    // var table = [
    //     [1,2],
    //     [3,4] 
    // ]

    // table[0][0]=table[0][1]
    // table[0][1]=table[0][0]

    //table[0,1]=[0,1]
/**
    for(let row = 0; row < table.length; row++) {
        for(let col = 0; col < table[row].length; col++) {
      
            [table[row],table[col]]=[table[col],table[row+1]]


        }

    } */



 //console.table(table)



 /**
  * 
  *       for(let col = 0; col < table[row].length; col++) {
           [table[row],table[col]]=[table[3],table[row]]
           //console.log(row,col)
         }
  */

//llenado
//  function fillMatrixValue(Row,Col){
//     count=0;    
//     let table = new Array(Row).fill('').map(() => new Array(Col).fill('')); // create empty n x n array
//     for(let row = 0; row < table.length; row++) {
//         for(let col = 0; col < table[row].length; col++) {
//             table[row][col] = count++;
//         }
//     }

//    return table
// }

// fillMatrixValue(4,4)

// console.table(fillMatrixValue(4,4));


/**
for(let row = 0; row < table.length; row++) {
    for(let col = 0; col < table[row].length; col++) {
        contable[row][col] = count++;
    } */


