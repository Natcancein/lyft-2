$(document).ready(function(){

//ANIMACION PRINCIPIO

$('#section1').hide(3000);
 //inicio desapareción logo
	 setTimeout(function() {
        $('#logo').fadeOut(2500);
    },3000);

  setTimeout(function() {
        $('#section1').fadeIn(2500);
    },2000);

 //comprobar codigo numero de teléfono
$("#enviar").click(function () {  
    if($("#telefono").val().length == " ") {  
        alert("El teléfono es obligatorio");  
        return false;  
    }  
    return false;  
}); 

$("#enviar").click(function () {  
    if(isNaN($("#telefono").val())) {  
        alert("El teléfono solo debe contener números");  
        return false;  
    }  
    return false;  
});  

// BOTON NEXT

$("#telefono").keyup(function(){
	if ($(this).val().length<10){
		$("#enviar").attr("class","disabled");
	}else {
		$("#enviar").removeAttr("class", "disabled");
		$("#enviar").attr("id", "btn-next");
	} 

})


});

