// Classes And Object in JavaScript

// const student = {
//     fullName : "SaurabhShukla",
//     marks : 94.56,
//     printMarks: function () {
//         console.log("marks = ",marks);
        
//     },

// };

// Prototype;

// const employee ={
//     calcTax(){
//         console.log("The Tax is 20%");
//     }
// }
// const karanArjun={
//     salary:50000,
// }
// const karanArjun2={
//     salary:55000,
// }
// const karanArjun3={
//     salary:60000,
// }
// const karanArjun4={
//     salary:65000,
// }

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


//Classes in Js

// class ToyotaCar {
//     constructor(brand,mileage){
//         console.log("Creating the object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
// }


// let fortuner = new ToyotaCar("fortuner",15);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",10);
// console.log(lexus);

// Inheritance in Js 

// class parent{
//     hello(){
//         console.log("This is the parents class");
//     }
// }

// class child extends parent{

// }
//  let obj = new child();


//another ex of the inheritance

// class person{
//     eat(){
//         console.log("People eat");
//     }
//     sleep(){
//         console.log("People sleep");
//     }
// }

// class engineer extends person{
//     work(){
//         console.log("Engineers work");
//     }
// }

// let saurabhObj=new engineer();

//super keyword

class person{
    constructor(name){
        console.log("This the parent constructor");
        this.species="homo-shapians";
        this.name=name;
    }
    
    eat(){
        console.log("People eat");
    }
    sleep(){
        console.log("People sleep");
    }
}

class engineer extends person{
    constructor(name){
        console.log("This is the child constructor");    //firstly this will execute
        super(name);         //To invoke the Parents class constructor
    }
    work(){
        console.log("Engineers work");
    }
}

let saurabhObj=new engineer("Saurabh");