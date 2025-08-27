//Arithmetic Operators
let a=10;
let b=5;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a**b=",a**b);  //exponentiation
console.log("a%b=",a%b);    //modulus


//unary operator
a++;   //a=a+1;
b--;   //b=b-1;
console.log("a=",a);    //11
console.log("b=",b);      //4
console.log("++a=",++a);    //12
console.log("a++=",a++);   //12
console.log("--b=",--b);     //3
console.log("b--=",b--);   //3
console.log("a=",a);        //13
console.log("b=",b);     //2


//Assignment Operator
a+=2;             //a=a+2=12
console.log(a);
a-=4;              //a=a-4=8(prevousily a=12)  
console.log(a);
a*=3;                //a=a*3=24
console.log(a);
a/=2;              //a=a/2=12
console.log(a);



//Comparison Operators
console.log("a==b:",a==b);
console.log("a!=b:",a!=b);
console.log("a==a",a==a);
console.log("a===b:",a===b);
console.log("a!==b:",a!==b);

a="5"       //number
b=5     //string
console.log("a==b:",a==b);
console.log("a===b:",a===b);   //strict equality operator



//logical operators
let cond1=a>b
let cond2= a===9
console.log(cond1&&cond2);