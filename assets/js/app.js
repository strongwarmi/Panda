window.addEventListener('load',function(){
var ekis=document.getElementsByClassName("button_x");
var DivsPandas= document.getElementsByClassName("ContenedorFoto");
//console.log(ekis);
btnpanda1.addEventListener('click',function(){
  panda1.style.display="none";
});
btnpanda2.addEventListener('click',function(){
  panda2.style.display="none";
});
btnpanda3.addEventListener('click',function(){
  panda3.style.display="none";
});
btnpanda4.addEventListener('click',function(){
  panda4.style.display="none";
});
;
});//fin load
restaura.addEventListener('click',function(){
  //DivsPandas.classList.add("MuestraFoto");
  panda1.style.display="inline-block";
  panda2.style.display="inline-block";
  panda3.style.display="inline-block";
  panda4.style.display="inline-block";
})
origen.addEventListener('click',function(){
  if (TextOrigen.style.display == "none") {
    TextOrigen.style.display="inline-block";
  }else {
    TextOrigen.style.display="none";
  }
});
historia.addEventListener('click',function(){
  if (TextHistoria.style.display == "none") {
    TextHistoria.style.display = "inline-block";
  }else {
    TextHistoria.style.display = "none";
  }
});
