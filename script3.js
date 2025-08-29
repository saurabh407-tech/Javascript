//Array in Js

let arr=[28,85,93,56,12,54]
console.log(arr);


// for loop in array

Heroes=["Salman","Shahrukh","Amitabh","Ajay","Akshay"]
for(let i=0; i<Heroes.length; i++)
{
    console.log(Heroes[i]);
}


//for of loop in array

let cities=["Agra","Delhi","Pune","Chennai","Banglore","Hyderabad","Jaipur"]
for (let city of cities)
{
    // console.log(cities[city]);
    console.log(city.toUpperCase());
}


/* que) for the given array with the marks of students -> [92,67,78,32,56,90,91,33,23,16]
find the average marks of the entire class and also find how many student have passed 
if the passing marks is 40 */

let count=0;
let sum=0;
let marks=[92,67,78,32,56,90,91,33,23,16]
for(let i in marks)
{
   sum=(sum+marks[i]);

   if(marks[i]<=40)
   {
    count++;
   }
}
let avg=sum/marks.length;

console.log("The average marks of the student is ",avg);
console.log("The number of the student who have failed in the exam is ",count);



/* que) For a given array with the prices of five items -> [120,232,454,604,324].
all item have a discount of 10% change the array to store the final prices after discount */

let prices=[120,232,454,604,324];
for(let i in prices){
    newprice=prices[i]-(prices[i]*10/100);
    prices[i]=newprice;
}

  console.log("The new prices after the offer will be ",prices);



//Array methods in javascript

let sweets=["kajukatli","Gulabjamum","Rasgulla","Jalebi"]
console.log(sweets)
// sweets.push("Barfi");  //adds the element at the last of the array
 sweets.pop("jalebi");  //removes the last element from the array
 console.log(sweets);
 console.log(sweets.toString());   //converts the array into string



//concate methode in the array

let veg=["carrot","potato","onion"]
let fruits=["banana","apple","grapes"]
// let mix=veg.concat(fruits)      // this methode concate two array
// console.log(mix);
let newVeg=veg.shift()  //this methode removes the first element from the array
console.log(newVeg);
console.log(veg);
let newFruits=fruits.unshift("mango")  //this methode adds the element at the first position of the array
console.log(fruits);


//slice methode

let arr5=[21,70,54,76,23,45]
// let newArr=arr5.slice(1,4)
let newArr1=arr5.splice(1,2,60,70)
console.log(arr5)


/* que) Create an array to store the companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
     a) remove the first company from the array
     b) remove Uber and add Ola in its place
     c) add Amazone at the end  */

     let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
     let newCom=companies.shift()
     console.log(companies)   //this removes the first array element

    let newCom1=companies.splice(2,1,"Ola")  //removes the uber and adds the ola
    console.log(companies)
     
     companies.push("Amazone")  //add the amazone at the end
     
     console.log(companies)