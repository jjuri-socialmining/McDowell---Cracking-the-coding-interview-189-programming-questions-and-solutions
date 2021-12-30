console.clear()
/**
 * 
 One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
( condition ) ? run this code : run this code instead

 */

 let matchCount=0;
 function oneWay(myString1,myString2){
    myArray1myString1=myString1.split("");
    for([key,value] of myArray1myString1.entries()){

       if( myString2.search(value)===-1){
            matchCount++;
       }
    }
    console.log(matchCount)
    if(matchCount == 1) {return true }else{return false} ;
}

console.log(oneWay("pale","bake"))

/*

pale, ple -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
  */