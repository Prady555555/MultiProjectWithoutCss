 var but = document.querySelector('button');
 but.addEventListener('click',buttonFunction);
 
 document.querySelector('input').addEventListener('keypress',inputFunction);
 
 
 
 
 function buttonFunction(){ 
  click();
 var input =  document.querySelector("input").value;
 if(input === ""){
  document.querySelector('#empty-p').innerHTML= "";
  return;
 }
 val = Number(input);
if(val<50){
   document.querySelector('#empty-p').innerHTML= val+10;
 }else{
  document.querySelector('#empty-p').innerHTML = val;
 }

}

function inputFunction(event){
console.log(event);
  var keyValue = event.key;
  console.log(keyValue)
  if(keyValue==='Enter'){
    buttonFunction();
  }
}

function click(){
 but.classList.add("btn-color");
 setTimeout(() => {
  but.classList.remove("btn-color");
 },400);
}
