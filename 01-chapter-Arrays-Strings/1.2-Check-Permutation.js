
let StringA = "abc";
let StringB = "cba";

let arrA=[];
let arrB=[];

arrA=StringA.split("")
arrB=StringB.split("").slice().reverse()

var distinct =[];

function test(){

    for(i=0;i<arrA.length;i++){
      if(arrA[i]==arrB[i]){return true} else{return false}
    }
}
console.log(test()? 'equals' : 'no equals')
