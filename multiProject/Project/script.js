var btn = document.querySelector('button');

btn.addEventListener('click',btnFunction);

function btnFunction(){
  if(btn.innerHTML==="Click me"){
    btn.innerHTML="Subscribed";
    btn.classList.add('btn-Click');
  
}else{
  document.querySelector("button").innerHTML="Click me";
  btn.classList.remove('btn-Click');
}



}

// function animation (){
  
//   btn.classList.add('btn-Click');
//   setTimeout(() => {
//     btn.classList.remove('btn-Click');
//   },100);
// }