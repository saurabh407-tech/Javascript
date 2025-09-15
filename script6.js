//Events in js 

// let bttn=document.querySelector("#btn1");

// bttn.onclick = (evt) => {
//      console.log(evt);
//      console.log(evt.type);
//      console.log(evt.target);
//      console.log(evt.clientX, evt.clientY);

    // let a=25;
    // a++;
    // console.log(a);
//}
  
    // btn1.onclick = ()  =>{
    //     console.log("Handler2")
    //}

 //let bx=document.querySelector("div");

  // bx.onmouseover =(evt) => {
  //   console.log("you are in box");
  //   let a=60;
  //   a--;
  //   console.log(a);
  //   console.log(evt);
  //    console.log(evt.type);
  //    console.log(evt.target);
  //    console.log(evt.clientX, evt.clientY);

  // }

  // btn1.addEventListener("click",(evt) =>{
  //   console.log("button1 was clicked");
  //   // console.log(evt);
  //   // console.log(evt.target);
  //   // console.log(evt.type);
  // })

  //  btn1.addEventListener("click",() =>{
  //   console.log("button1 was clicked-handler2");
  // })

  //  const handler3=() =>{
  //   console.log("button1 was clicked-handler3");
  // }

  // btn1.addEventListener("click",handler3);

  //  btn1.addEventListener("click",() =>{
  //   console.log("button1 was clicked-handler4");
  // })

  // btn1.removeEventListener("click",handler3);



  /* que) create a toggle button that changes the screen to the dark mood
  when clicked and change to light mood when clicked again */

  let modebtn = document.querySelector("#mode");
  let curmode="light";
  modebtn.addEventListener("click", () => {
    if(curmode==="light"){
      curmode="dark"
      document.querySelector("body").style.backgroundColor ="black";
    } 
    else 
    {
      curmode="light"
      document.querySelector("body").style.backgroundColor="white";
    }
    console.log("my current mode",curmode);
  });