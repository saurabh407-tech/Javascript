// Classes And Object in JavaScript

const student = {
    fullName : "SaurabhShukla",
    marks : 94.56,
    printMarks: function () {
        console.log("marks = ",marks);
        
    },

};

// Prototype;

const employee ={
    calcTax(){
        console.log("The Tax is 20%");
    }
}
const karanArjun={
    salary:50000,
}
const karanArjun2={
    salary:55000,
}
const karanArjun3={
    salary:60000,
}
const karanArjun4={
    salary:65000,
}

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;


//Classes in Js

class ToyotaCar {
    constructor(brand,mileage){
        console.log("Creating the object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}


let fortuner = new ToyotaCar("fortuner",15);
console.log(fortuner);
let lexus = new ToyotaCar("lexus",10);
console.log(lexus);

// Inheritance in Js 

class parent{
    hello(){
        console.log("This is the parents class");
    }
}

class child extends parent{

}
 let obj = new child();


//another ex of the inheritance

class person{
    eat(){
        console.log("People eat");
    }
    sleep(){
        console.log("People sleep");
    }
}

class engineer extends person{
    work(){
        console.log("Engineers work");
    }
}

let saurabObj=new engineer();

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



/* Que1) You are creating a website for your college create a class user with two properties name and email.It also has
          a method called viewData() that allows user to view data. */

          let DATA="secrete information";
          class user{
            constructor(name,email){
                this.name=name;
                this.email=email;

            }
            viewData(){
                console.log("data is",DATA);

            }
          }

          class Admin extends user{
            constructor(name,email){
                super(name,email);     //whenever we are making constructor in the child class we need to call the constuctor of parent class
            }
            editData(){
                DATA= "some new value";

            }
          }

          let student1=new user("Saurabh","abc@emailcom");
          let student2=new user("Sachin","cde@email.com");

          let teacher1=new user("Dean","dean@gmail.com");
          let teacher2=new user("Hod","hod@gmail.com");

          let admin1=new Admin("admin","admin@gmail.com");