$(document).ready(function(){

// inicio desapareción logo
	 setTimeout(function() {
        $('.logo').fadeOut(2500);
    },2000);


 
 $('.section1').hide(3000);

  setTimeout(function() {
        $('.section1').fadeIn(2500);
    },2000);

 //comprobar codigo numero de teléfono
$("#enviar").submit(function () {  
    if($("#telefono").val().length < 1) {  
        alert("El teléfono es obligatorio");  
        return false;  
    }  
    return false;  
}); 

$("#enviar").submit(function () {  
    if(isNaN($("#telefono").val())) {  
        alert("El teléfono solo debe contener números");  
        return false;  
    }  
    return false;  
});  

$("#enviar").submit(function () {  
    if($("#telefono").val().length < 9) {  
        alert("El teléfono debe tener 10 caracteres. Ej. 6661122339");  
        return false;  
    }  
    return false;  
}); 

var value = $('#telefono').val();
   if(value.length() != 10 || value.length() = ''){
     $('#enviar').addClass('disabled'); //desabilitar boton
   }
   if(value.size() == 10){
     $('#enviar').removeClass('disabled'); // remover
   };

});

