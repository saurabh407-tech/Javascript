//For loop concept

for(let i=1; i<=5; i++)
{
    console.log("Saurabh Shukla is a Good Coder");
}


// calculate the sum  of the n numbers n is taken from the user end

let n=prompt("Enter the value of the n");
let sum=0;
for ( i=1; i<=n; i++)
{
    sum=sum+i;
}
console.log("The sum of the n Numbers is ",sum);


//do while loop concept

let i=5;
do{ 
    console.log("i =",i);
    i++;
}
while(i<=10);

//for of loop concept

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80


//for in loop concept

let student={
    name:"Saurabh Shukla",
    age:22,
    cgpa:7.95,
    college:"Abes Institute of Technology",
    isPassed:true,
}
for (let i in student)
{
    console.log(i);
    console.log(student[i]);
}


//print all even numbers from 0 to 100

for (let i=0; i<=100; i++)
{
    if(i%2===0)
    {
        console.log(i);
    }
}



/*create a game where you start with random game number and user
 need to guess the game number untill he/she guess keep asking to guess*/

let gameNum=25;
let userNum=prompt("Guess the number to win the game");
while(userNum!=gameNum)
{
    userNum=prompt("You have entered the wrong number please try again");

}
console.log("Congratulations!! You win the game");



//Strings in javascript

let str1="Sachinji"
let str2="Saurabh" 

console.log(str1.length);
console.log(str2.length);

console.log(str1[2])



//template literals in javascript
let obj={
    item:"pen",
    price:10,
    quantity:5,
    brand:"Reynolds",
    isWorking:true,
}

let output=`the cost of the ${obj.item} of the ${obj.brand} is ${obj.price} and the quantity is ${obj.quantity}`  
console.log(output);   //hence by the use of template literals `` we can easily print the values of the object in a single line
let output2=`after the addition of the numbers we get ${1+5+32+89}`
console.log(output2);



//string methods in javascript  also we know that strings are immutable(cannot be changed) in js
let str="Saurabhshukla";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(1,9));  //slice method jis index se lena hai aur jis index ke pahle tk lena hai wo indexes ko dalte hai


//   trim method
let s= "        Saurabh Shukla and i am a btech third year student       ";
console.log(s.trim());    //trim methods removes the extra spaces from the starting and ending of the string


// concatenation methode 

let str5="Saurabh"
let str6="Shukla"
console.log(str5.concat(str6));
console.log(str5+" "+str6);  //another way of concatenation

//Replace method in string

let str3="Shivam is a good boy and Shivam is a good coder";
console.log(str3.replaceAll("Shivam","Saurabh"))   //replace all replaces all the matching values

let st="Hello"
console.log(st.replace("H","J"))

console.log(str3.charAt(5))  // at the index 5 m is present so m will be the output




/*que) Prompt the user to enter their full name.Generate the username as per the input
start the username with @ followed by full name and ending with the length of the full name */

let fullName=prompt("Enter the full name");
let userName=`@${fullName}${fullName.length}`;
console.log(userName);
