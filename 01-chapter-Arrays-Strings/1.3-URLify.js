
console.clear()
//---------------

// First approach Brute Force
let myString = "Mr John Smith ";

var replaced = myString.split(" ") .join("%20")
console.log(replaced)


// second Aproach
myString.replace(" ","%20")
console.log(myString)

// Third Aproach

let _replaced = myString.split("")

for(let [key,value] of _replaced.entries()){

    if(value === " "){
        _replaced[key]="%20";
    }
}

console.log(_replaced.join(""))