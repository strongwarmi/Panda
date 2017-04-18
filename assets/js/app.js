//window.addEventListener('load',function(){
var ekis=document.getElementsByClassName("button_x");
console.log(ekis);

  ekis[i].addEventListener("click",function(){
    var indice = i+1;
    console.log(indice);
    var DivPanda = "panda" +indice;
    DivPanda.style.display="none";
  });

//});//fin load
