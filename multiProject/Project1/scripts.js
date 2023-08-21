var number1 = Math.floor(Math.random()*3 + 1);
 var hard = document.querySelectorAll("button")[0].addEventListener("click", execute)
var pap = document.querySelectorAll("button")[1].addEventListener("click",execute2);
var sharp = document.querySelectorAll("button")[2] .addEventListener("click", execute3);
var set = document.querySelectorAll("button")[3].addEventListener("click",execute4)
var frstResult ="";
var finalResult ="";

var object1 = JSON.parse(localStorage.getItem('score'))|| {wins : 0,
loses : 0,tie : 0 ,}


// if(object1===null){
//   object1= {
//     wins : 0,
//     loses : 0,
//     tie : 0 ,
//   }

// }



function execute (){

first();

forAll("rock");


}


function execute2 (){
first();
forAll("paper");

}

function execute3 (){
first();
forAll("sciccer");
}

function execute4(){
 object1.wins=0;
 object1.loses=0;
 object1.tie=0;
 localStorage.removeItem('score');
 updateScore();
 document.querySelector('#html2').innerHTML="";
 document.querySelector('#html1').innerHTML= "";
//  document.querySelector('#html3').innerHTML= "";

}


document.querySelector('#html3').innerHTML=`wine: ${object1.wins} lose: ${object1.loses} tie: ${object1.tie} `;

function first() {
  if(number1 === 1){
    frstResult= "rock";
}else if (number1===2){
    frstResult = 'paper';
}else{
    frstResult = 'scisser';
}
}

function forAll (item){

if(item == "rock" ){
       
    if(frstResult === "rock"){
        finalResult = 'tie';
      }else if ( frstResult === 'paper'){
        finalResult = 'lose';
      }else {
        finalResult = 'win';
      }
       
}else if ( item === "paper"){
    
    if(frstResult === "rock"){
      finalResult = 'win';
    }else if ( frstResult === 'paper'){
      finalResult = 'tie';
    }else {
      finalResult = 'lose';
    }
  }else {
    if(frstResult === "rock"){
      finalResult = 'lose';
    }else if ( frstResult === 'paper'){
      finalResult = 'win';
    }else {
      finalResult = 'tie';
    }

  }
  winees();
  // alert(`you have played ${item} and the computer have played ${frstResult}  and 
  // you have wine${object1.wins} and you have lost ${object1.loses} and you have tie ${object1.tie}`);
  document.querySelector('#html1').innerHTML= finalResult;
  
  document.querySelector("#html2").innerHTML= `You : ${item}:      Computer : ${frstResult} `;
  
  updateScore();
  
}


function winees (){
  if(finalResult ==='win' ){
     object1.wins++;
  }else if(finalResult==='lose'){
    object1.loses++;

  }else{
    object1.tie++;
  }
localStorage.setItem('score',JSON.stringify(object1)) ;
}


function updateScore() {
 
  document.querySelector("#html3").innerHTML=`wine: ${object1.wins} lose: ${object1.loses} tie: ${object1.tie} `
}