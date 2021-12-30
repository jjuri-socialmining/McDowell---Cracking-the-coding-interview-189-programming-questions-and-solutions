/**
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints: #92, # 11 0
*/

//frequency = {}; for(let letter of "mississippi"){ frequency[letter] ? frequency[letter]++ :frequency[letter] = 1; }console.log(frequency)

var compressed = '';
var currChar = '';
var currCount = '';
var maxCount = 1;

stringCompression = (myString)=>{

   for(let letter of myString){
      if (currChar !== letter) {
         //console.log(currChar, letter);
         compressed = compressed + currChar + currCount;
         console.log(compressed)
         maxCount = Math.max(maxCount, currCount);
         currChar = letter;
         currCount = 1;
      }
      else {
         currCount++;
       }
   }

compressed = compressed + currChar + currCount;
maxCount = Math.max(maxCount, currCount);

   return maxCount === 1 ? myString : compressed;
}

console.log(stringCompression("aabcccccaaa"),"a2b1c5a3");


/** HISTORIA
 * 
 * 
Start:2020-09-28 11:09:09 Pause 10min
2020-09-28 11:44:49
2020-09-28 11:53:50

# Lecciones Aprendidas - Hoy se repaso 2020-09-28 14:19:02

* Como seleccionar los datos distintos de un Array
* Como filtrar y dejar solo los valores de iguales dentro de otro areglo con filter
* Como manejar el objeot map y declarar sus key y sus values
* Como trabajar con un string y sus ``

 */









// let map = new Map();
// let str ="";
//  function Compression(myString){
//     myStringArray=myString.split("");

//     myKeyDifferent=[...new Set(myStringArray)] 
//     myKeyDifferent.forEach(element => {
//     key=myStringArray.filter(x=>x===element)
//         map.set(element,key.length);
//     }); 

//     map.forEach((value,key)=>{
//        //str += key+""+value ;
//        str += `${key+$value}`;
//     }
    
//     )
//     return str
//  }

// console.log(Compression("aaadddee"));
/**arr = [1,2,2,4]
 
arr.map(myFunction);
function myFunction(value,index,array){}*/