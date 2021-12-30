console.clear()
const LinkedList = require("../02-chapter02-Linked-List/util/LinkedListX");
// Pendiente 
// hacer el ejercicio sin buffer si no con 2 punters

/**
 *
 *
 * Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
Hints: #9, #40}

Lecciones Aprendidas:

1) Ojo q hay q eliminar el objeto de la lista
 */
// removeDups redone
 // Usando 2 buffers
 function deleteDuplicated2Buffers(tail){
    //let tail = this.head;
    let myArray={};
    let arrDistinct=[];

    while (tail) {
        //console.log(tail.element)
        if(myArray[tail.value]){
            list.deleteSpecificNode(tail.value)
            myArray[tail.value]++;
        }
        else{
            myArray[tail.value]=1; 
            arrDistinct.push(tail.value)
        }
        tail = tail.next;
    }
    return list
}

/**Solucion: 

In order to remove duplicates from a linked list, we need to be able to track duplicates. A simple hash table
will work well here.
In the below solution, we simply iterate through the linked list, adding each element to a hash table. When
we discover a duplicate element, we remove the element and continue iterating. We can do this all in one
pass since we are using a linked list.
 * 
 * The above solution takes 0 (N) time, where N is the number of elements in the linked list.
 */
function removeDuplicates(list) {
    const _set = new Set();
    let current = list.head;
    let prev = null;
    while (current) {
      if (_set.has(current.value)) {
        // duplicate found
        // de-link it from the list
        // cur jumps next but previous stays
        // right behind cur (as always)

        // let elem = cur;
        //prev.next = cur.next;
        //cur = cur.next;
        //elem.next = null;

        [prev.next,current]=[current.next,current.next]
      }
      else {
        // add to the set
        _set.add(current.value);
        [prev,current]=[current,current.next]
        //prev = current;
        //current = current.next;
      }
    }
  
    return list;
}





// quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

removeDuplicates(list)
list.printList(list.head)
 

 