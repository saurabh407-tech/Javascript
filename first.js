let price=29.1000;
let name="Saurabh"
 const coast=20
 console.log(coast)
 console.log(name)
 console.log(price)
 isFollow=true;
 console.log(isFollow);
 
 const student= {          //student is the object
    name: "Saurabhi",
    age: 23,
    marks:500,
    isPass: true, 
 };
 console.log(student);
console.log (student["name"])   //this print he value of the key name in student object
student["age"]=student["age"]+1
console.log(student["age"])        //this will print an increment value of the age 
student["name"]="sachin shukla "
console.log(student["name"]);        //this will print the new name of the student as given above


// Que) create  const object called "product" to store information shown in the picture.

const Product={
    productName: "parker_jotter_ball_pen",
    rating: 4/5,
    offer: 5,
    price: 285,
    isDeal: false,
};
console.log(Product);


//que) There is a instagram profile given as per the shown data write in a object name of object is Profile


const profile={
    name: "Saurabh Shukla",
    followers: "210",
    following: "290",
    posts: "6",
    about: "Scientist create the world as it is but Engineers creates the world that never has been",
};
console.log(profile)
