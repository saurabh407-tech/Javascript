// DOM Manipulation

//fetch element by class name
let headin = document.getElementsByClassName("heading")
console.dir(headin)

//fetch element by tag name
let paragh= document.getElementsByTagName("p")
console.log(paragh);

//fetch element by id number or name
let byid= DocumentFragment.getElementById("heading")
  console.log(byid)

//Query selector

 let Element=document.querySelector("p")
console.dir(Element);

let div=document.querySelector("div")
console.dir(div)

let h2=document.querySelector("h2")
console.dir(h2.innerText)
h2.innerText= h2.innerText+" by Saurabh Shukla"


let divs=document.querySelectorAll(".box")     //to access with the class name
console.dir(divs)
divs[0].innerText="New value of box 1"           //to make changes after accessing it 
divs[1].innerText="New value of box 2"
divs[2].innerText="New value of box 3"

