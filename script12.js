// CALLBACKS,PROMISES,ASYNC-AWAIT...

//syncronous example like one execution will not wait for other

console.log("one");
console.log("two");

setTimeout(() =>{
    console.log("hello");
},4000);

console.log("three");   //this will not wait 4 seconds for the hello to print this will print before the hello prints 
console.log("four");     //hence this is the Asynchronous 

function sum(a,b){
    console.log(a+b)
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(2,3,sum);

//nesting

let age=65;
if(age>=18){
    if(age>60){
        console.log("Senior Citizen");
    }
    else{
        console.log("Middle Man");
    }
}
else{
    console.log("child");
}


for(let i=0; i<5; i++){
    str="";
    for(let j=0; j<5; j++){
        str=(str+j);

    }
    console.log(i,str);
}

function getData(dataId,getNextData){
    setTimeout(() => {
          console.log("Data",dataId);
          if(getNextData){
            getNextData();
          }
    },2000);                           //this will print Data 1,2,3 after 2 seconds
   
}

// //callback hell

getData(1,() =>{
    console.log("Getting Data 2...");
    getData(2,() =>{
        console.log("Getting Data 3...");
        getData(3, () => {
            console.log("Getting Data 4...");
            getData(4);
        });
    })
});


//Promises

let promise =new Promise( (resolve,reject) =>{
    console.log("This is the promise");
      reject("some error");
})

function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
       setTimeout(() => {
          //console.log("Data",dataId);
          //resolve("success");
          reject("error");
          if(getNextData){
            getNextData();
          }   
    }, 2000); 
    })
}

const getPromise=() => {
   return new Promise((resolve,reject)=>{
        console.log("I m a promise");
        //resolve("success");
        reject("network error")
    })
};

let proomise=getPromise();
proomise.then(() =>{
    console.log("This is because of then");    //this will not print if the case was of rejected
});

proomise.catch((errr) =>{
    console.log("rejected case",errr);    //in case of reject it will print
})



function asyncFun1 ()  {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        },4000)
    })
    
}

function asyncFun2 ()  {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data2");
            resolve("success");
        },4000)
    })
    
}


console.log("fetching the data1...");
  asyncFun1().then((res) =>{ 
       console.log("fetching the data2..");
        asyncFun2().then((res) =>{                           //ex of promise chaining then ek then ke sath dusra then 
        console.log("fetched both data successfully..")
       }) 
})



function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
       setTimeout(() => {
        console.log("Data",dataId);
          resolve("success");
          if(getNextData){
            getNextData();
          }   
    }, 2000); 
    })
}
   getData(1).then((res) =>{           //promise chaining
    console.log(res);                 
    getData(2).then((res) =>{
        console.log(res);
    })
   })

   
//same thing but another methode in this success will be printed one time at last we have done above same work with callback hell..


console.log("fetching the data1...");
getData(1)
.then((res) =>{
    console.log("fetching the data2...");
    return getData(2);
})
.then((res) =>{
    console.log("fetching the data3...");
    return getData(3);
})
.then((res) =>{
    console.log("fetching the data4...");
    return getData(4);
})
.then((res) =>{
     console.log(res);
})


//async-await

function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("weather data");
            resolve(200);
        },2000)
    })
}

async function getWeatherData(){
    await api();  //1st call           //jb tak first kam complete nhi ho jayega second kam execute nhi hoga
    await api();  //2nd call
    await api();  //3rd call
}



function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
       setTimeout(() => {
        console.log("Data",dataId);
          resolve("success");
          if(getNextData){
            getNextData();
          }   
    }, 2000); 
    })
}

async function getDataSystem(){            //this is same as promise & callback hell but comparatively this is easy one
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");          //jab tak data1 print nhi ho jayega data2 pe move on nhi karega due to await fun..
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
}


//IIFE ka use karte hai dusra function na banane ke liye in async-await case me for example just upar wala ex

(async function(){            
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");          
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
}) ();
  


// Lets compare callback hell,promise chain & Async-Await codes

//callback hell

getData(1,() =>{
    console.log("Getting Data 2...");
    getData(2,() =>{
        console.log("Getting Data 3...");
        getData(3, () => {
            console.log("Getting Data 4...");
            getData(4);
        });
    })
});



//promise chaining

console.log("fetching the data1...");
getData(1)
.then((res) =>{
    console.log("fetching the data2...");
    return getData(2);
})
.then((res) =>{
    console.log("fetching the data3...");
    return getData(3);
})
.then((res) =>{
    console.log("fetching the data4...");
    return getData(4);
})
.then((res) =>{
     console.log(res);
})



//Async-Await   (Sabse easy one)

async function getDataSystem(){            
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");          
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
}


