console.clear()
const LinkedList = require("../02-chapter02-Linked-List/util/LinkedListX");


// quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

console.log(list.tail)
 