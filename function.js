//You manage a grocery store and need to keep track of the inventory of various items.
// You will use arrays to store the data and various functions to manipulate and analyze the data. 

//Create an array containing the names of all items in the inventory maximum of 10.
//Create a separate array with the corresponding stock quantities of each item maximum of 10.

let fruits = ["banana","mango","orange","apple","pineapple","pears","kiwi","berry","grapes","lemon"]
let stockQuantity = [15,23,60,17,32,89,31,90,68,85]

//Write a function to add a new item to the inventory, updating both arrays.
function add(){
    fruits.push("blueberries")
    console.log(fruits)
    stockQuantity.push(50)
    console.log(stockQuantity)
}
add()




//Write a function to calculate the total number of items in the inventory.

function totalItems(){
  let z = stockQuantity.length;
  return z 
}
console.log(totalItems())


    


//Write a function to update the stock quantity of an existing item.
function updateStock(){
  stockQuantity[3]=43
  console.log(stockQuantity)
}
updateStock()




//Write a function to find the item with the lowest stock quantity.
