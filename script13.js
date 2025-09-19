//API Calls 

const URL="https://api.thecatapi.com/v1/images/0XYvRd7oD";

const getFacts= async() =>{
   console.log("fetching the data");
   let response= await fetch(URL);
   console.log(response);           //this is in JSON formate 
   let data= await response.json();         //hence we hv converted it in js object formate real data
   console.log(data);
   console.log(data.height);       //height is the data inside the API whose link provided which will get print
}

 