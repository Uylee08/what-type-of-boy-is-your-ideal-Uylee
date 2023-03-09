let NumberButton= document.querySelector(".numberbutton");
let StyleButton=document.querySelector(".stylebutton");
let Q1= document.querySelector(".question1");
 let Q2= document.querySelector(".question2");
    let Coolboyscreen= document.querySelector(".coolboyscreen");
let coolboy= document.querySelector(".coolboy");
let coolman= document.querySelector(".coolman");
let warmboy= document.querySelector(".warmboy");
let warmman= document.querySelector(".warmman");

//NumberButton.onclick = function() {
 // let NumberInput= document.querySelector(".numberinput").value;
    //if (NumberInput<30&&NumberInput>0){
        // document.querySelector(".number-massage").innerHTML="Great!";
  //  }
   // else if (NumberInput>=30&&NumberInput<99){
        // document.querySelector(".number-massage").innerHTML="Keep going!";
  //  }
  //  else if (NumberInput>=99){
        // document.querySelector(".number-massage").innerHTML="But I want him to stay with you longer";
   // }

//};


StyleButton.onclick = function() {

    let NumberInput= document.querySelector(".numberinput").value;
    let StyleInput= document.querySelector(".styleinput").value;
     if (StyleInput==="cool"&&NumberInput<30&&NumberInput>0){
        coolboy.style.display="block";
         document.querySelector(".style-massage").innerHTML="Good choose!The cool boy coming!";}

  
    else if (StyleInput==="cool"&&NumberInput>=30&&NumberInput<99){
       coolman.style.display="block";
        document.querySelector(".style-massage").innerHTML="Good choose!The cool man coming!";}
  
  else  if (StyleInput==="warm"&&NumberInput<30&&NumberInput>0){
        warmboy.style.display="block";
         document.querySelector(".style-massage").innerHTML="Good choose!The warm boy coming!";}   
     
     else if (StyleInput==="warm"&&NumberInput>=30&&NumberInput<99){
       warmman.style.display="block";
        document.querySelector(".style-massage").innerHTML="Good choose!The warm man coming!";} 

    
};


