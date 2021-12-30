console.clear()
/**
 * 
 String Rotation: Assume you have a method isSubst ring which checks if one word is a substring
of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
Hints: #34, #88, #104

* [References](https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript)
 */

 // segundo intento
const a = ['a', 'b', 'c'];
const b = ['c', 'a', 'x'];
let test=a.every(x=> b.indexOf(x) !== -1)
//console.log(test)

// ES6 (fastest)
function stringRotation(string1, string2) {

    let test=string2.split("").every(x=> string1.split("").indexOf(x) !== -1);
return test
}
// Test 
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt8'), false);
console.log(stringRotation('aaata', 'aataa'), true);


// ES2016
const a = ['a', 'b', 'c'];
const b = ['c', 'a', 'd'];
a.some(v => b.includes(v));

//Underscore
const a = ['a', 'b', 'c'];
const b = ['c', 'a', 'd'];
_.intersection(a, b)




/** 
function stringRotation(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
    return (string2+string2).includes(string1); // one call of isSubString
  };

// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring


 */
