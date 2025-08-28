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



//Conditional statements

let age=16;
if(age>18)
{
    console.log("Eligible for voting")
}
else
{
    console.log("Not eligible for the voting")
}

//Another

let mode="dark"
let color;
if (mode=="dark")
{
    color="black"
}
if (mode=="light")
{
    color="white"
}
console.log(color);


//Ternary Operator

let result=age>18 ? "adult" : "not adult";
console.log(result);



//Switch Statement

let expr="papaya";
switch(expr)
{
    case "mango":
    console.log("king of the fruits");
    break;
    case "apple":
        console.log("A sweet red fruit");
        break;
    case "papaya":
        console.log("Good for the health");
        break;
        default:
            console.log("Please select a valid fruits");
}


/*que)WAP to ake input a number using prompt("Enter a number") and check wheather 
      the number is divisible by 5 or not. */

      let num=prompt("Enter a number");
      if(num%5===0)
      {
        console.log("The number is Divisible by 5");
      }
      else{
        console.log("Number is not divisible by 5");
      }


/*que) WAP to print the grades of the student as per their marks
        80-100 A
        70-79 B
        60-69 C
        50-59 D
        40-49 F  */

        let marks=prompt("Enter the marks of the student");
        if (marks>=80 && marks<=100)
        {
         console.log("Grade is A");
        }
        else if(marks>=70 && marks<=79)
        {
            console.log("Grade is B");
        }
        else if(marks>=60 && marks<=69)
        {
            console.log("Grade is C");
        }
        else if(marks>=50 && marks<=59)
        {
            console.log("Grade is D");
        }
        else{
            console.log("Grade is F");
        }