var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
var botonLimpiar = document.querySelector("#limpiar");
var botonCopiar = document.querySelector("#copiar");
var muentraTextArea = document.querySelector("#muestra").disabled = true;
var boton ="";


function validarTextArea (){
  var codifica = document.querySelector("#codificar").value;
  var mensaje = document.querySelector(".mensaje");
  
  if (codifica ==""){ 
         mensaje.style.display="flex";
  }else {
         mensaje.style.display="none";
         expresiones();
  }
}

function expresiones() {
  var codifica = document.querySelector("#codificar");
  var informacion = document.querySelector(".fas");
  var exprecion =/[A-Z]/; 
  var exprecion1 =/[ÁÉÍÓÚ[áéíóú]/;
  var exprecion2 =/[\\\+\º\ª\|\"\@\$\~\%\€\&\¬\/\(\)\=\'\[\]\¨\´\{\}\Ç\ç\-\_\+\-\*\<\>\·]/; 
  var valida = exprecion.test(codifica.value);
  var valida1 = exprecion1.test(codifica.value);
  var valida2 = exprecion2.test(codifica.value);
  
     if (valida == true || valida1 == true || valida2 == true){
                   informacion.style.color ='red';
                   informacion.classList.add('fa-beat-fade');
     } else if( boton == "encriptar"){
                   informacion.classList.remove('fa-beat-fade'); 
                   informacion.style.color ='blue';
                   encriptarTexto();
              }
            else{
                    informacion.classList.remove('fa-beat-fade'); 
                    informacion.style.color ='blue';
                    desencriparTexto();
            }       
}



function encriptarTexto() {
  var frase = document.getElementsByClassName("text-area-1")[0].value;
  var fraseCodificada = frase;
  if(frase)
      var resultado0 = fraseCodificada.replaceAll("e","enter");
      var resultado1 = resultado0.replaceAll("i","imes");
      var resultado2 = resultado1.replaceAll("o","ober");
      var resultado3 = resultado2.replaceAll("a","ai");
      var resultado4 = resultado3.replaceAll("u","ufat");
      muestraResultado(resultado4,"Encriptado");                                      
} ;  

function desencriparTexto() {
  var frase = document.getElementsByClassName("text-area-1")[0].value;
  var fraseCodificada = frase;
 
  if(frase)
      var resultado0 = fraseCodificada.replaceAll("enter","e");
      var resultado1 = resultado0.replaceAll("imes","i");
      var resultado2 = resultado1.replaceAll("ober","o");
      var resultado3 = resultado2.replaceAll("ai","a");
      var resultado4 = resultado3.replaceAll("ufat","u");
      muestraResultado(resultado4,"Desencriptado");                                      
      
}





function muestraResultado(resultadoFinal,opcion) {
  botonCopiar=document.querySelector("#copiar");
  botonCopiar.style.visibility="visible";
  var limpiar = document.querySelector(".limpiar");
  var texto = document.querySelector("#listo");
  var areaBoton=document.querySelector(".area-boton");
  areaBoton.style.visibility="hidden";
  limpiar.style.display="block";
  texto.style.fontSize="0.8rem"
  document.getElementById('muestra').innerHTML = resultadoFinal;
  document.querySelector("#codificar").disabled = true;
  document.querySelector("#encriptar").disabled = true;
  document.querySelector("#desencriptar").disabled = true;
  document.querySelector("#listo").innerHTML = " Su Texto esta "+ opcion;
  document.querySelector("#codificar").value = " ";
  
}    

function copiarTexto(){
  var copiar = document.getElementById('muestra').value;
  navigator.clipboard.writeText(copiar);
  document.querySelector("#listo").innerHTML = " Su Texto esta Copiado";
  limpiar.style.display="block";
  
  
}

     
botonEncriptar.addEventListener("click", function (){
  boton = "encriptar";   
  validarTextArea();                                      
}) ;  

botonDesencriptar.addEventListener("click", function (){
   boton = "desecriptar";   
   validarTextArea();                                      
}) ;  

botonLimpiar.addEventListener("click",function () {
window.location.reload() 
});

botonCopiar.addEventListener("click",function () {
copiarTexto();
});