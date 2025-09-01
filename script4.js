//Functions & methode in js


function myFunction(){
    console.log("My name is Saurabh Shukla.");
    console.log("I am a good learner.");
    console.log("Currently i m doing coding and learning js.")
    console.log("I want to take placement as soon as possible..!")
}
myFunction();


//function to print the sum of any two number


function sum(num1,num2)
{
  console.log("The sum of two numbers is:",num1+num2);
}
  sum(2,3)
  sum(9,2)


//return type

function sum1(num3,num4){
    s=num3+num4;
    console.log("Before return")
    return s;
    console.log("After return");    //After return not even single line is executed this will not show
}
   
     let val=sum1(5,4)
     console.log("The sum is:",val);



//Arrow function

function sum5(n1,n2)
{
    s1=n1+n2;
    return sum5;
}
   const arrowsum = (n1,n2) => {
    console.log(n1+n2)
   }

   function mul(n1,n2)
   {
    m=n1*n2;
    return m;
   }
   const arrowmul= (n1,n2) =>{

      console.log(n1*n2)
   }



/*que) create a function using the "function" keyword that takes the string as an arguement
  & return the number of vowels in the string */


  function countVowels(str){
     let count=0; 
     for(const char of str)
     {
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
        {
            count++;
        }
    }
        console.log("The number of vowels are:",count)
  }
  countVowels("saurabh")
      


/* Create an arrow function to perform the same task */

const countVow=(str)=>{
     let count=0; 
     for(const char of str)
     {
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
        {
            count++;
        }
    }
        console.log("The number of vowels are:",count)
  
   return count;
}




/* for a given array of numbers print the square of each value usinh the forEachloop..*/


let arr=[2,5,1,6,3]
arr.forEach((num) =>{
  console.log(num*num)
})


//Map methode in array 

let arr1=[3,8,43,82,1]

arr1.map((val) =>{     //it prints array elements


  console.log(val);
}
)


//filter methode in js,,,.. to print the even number from the array

let arr2=[3,5,6,2,9,8,22,21,32]

let newarr1=arr2.filter((val) =>
{
  return val%2===0;
}
)
console.log(newarr1)



//reduce method in js...to print avg of array elements

let arr3=[2,5,9,1,4]
let count=1
let out=arr3.reduce((res,curr) =>
{ 
  count++;
  return res+curr;  
}
)
console.log(out/count);

//print the largest element of the array

let arr4=[3,8,55,96,23,14,64]
let newout=arr4.reduce((res,curr) =>
{ 
    return  res>curr ? res : curr;
 
}

)
console.log(newout);



/* we are given array of marks of student filter out the marks of student who score 90+  */

let arr5=[60,55,90,78,93,21,99,74,97,34]

let marks=arr5.filter((val) =>
{
  return val>89;
}
)
  console.log(marks);


/* que) Take a number n as a input from the user. Create an Array of numbers from 1 to n..
Use the reduce methode to calculate the sum of the array elements..*/


let n=prompt("Enter the value of n");
let arr6=[]

for(let i=1; i<=n; i++)
{
  arr6[i-1]= i;
}
  console.log(arr6);

  let summ=arr6.reduce((res,next) =>
  {
    return res+next;
  }
)
  console.log("The sum of the array elements is:",summ);

  let prod=arr6.reduce((res,next) =>
  {
    return res*next;
  }
)
console.log("The product of the array elements is:",prod);