
console.clear()
/**
 * 
 * 
 * @description :  Implement an algorith to determine if a string has all 
 * unique characters. What if you cannot use additional data structures?
 * 
 * @summary: Hints: 44 117 132
 * 
 *  PENDIENTE DESARROLLAR UNA FORMA DE NO USAR OTRO DTASCRTURE COMO UN ARRAY PARA DESARROLLAR EL PROBLEMA
 */

 // First Aproach 
class IsUniqueFirst{
  constructor(){}

  evaluating(data){

    let myNewArr=data.split("");
    let aux =[];
    //console.log(myNewArr)


    for(let [key,value] of myNewArr.entries()){
 
      if(aux.indexOf(value)===-1)
      {
        aux.push(value) 
      } 
      else{
      //console.log(`I found ${x}, therefore this string doesn't has unique value`);  
      // yes, not is unique
      return false
      }

  }
 
  return true;
  }

}

module.exports = IsUniqueFirst;

/**
var data = "abc"
//var data = "aaabbd"
let newIsUniqueFirst = new IsUniqueFirst()
console.log(newIsUniqueFirst.evaluating(data));
 */

 // 

  // Second Aproach 

  // with out other data structures

  class IsUniqueSecond{

    evaluating(data){



    }
  }