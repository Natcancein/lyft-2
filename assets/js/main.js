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

$("#enviar").keyup(function () {  
    if(isNaN($("#telefono").val())) {  
         $(".alerta").text("Debes ingresar números");  
        return false;  
    }  
    return false;  
});  

// BOTON NEXT
$("#signup").click(() =>{

$('#myModal').modal('show');
});

$("#telefono").keyup(function(){
	if ($(this).val().length<10){
		$("#enviar").attr("class","disabled");
	}else {
		$("#enviar").removeAttr("class", "disabled");
		$("#enviar").attr("id", "btn-next");
		
	} 
	
	//CODIGO VERIFICACIÓN

$('#enviar').click(function(){
 if($("#telefono").val().length===10 && $(this).val()!=NaN ){
   var code = '';
   var num = '123456789';
   for(var i = 0; i < 3; i++){
   	code += num.charAt(Math.floor(Math.random()*num.length));
   }
   $(".modal-body2").text("Tu código Lab: " + code);
   $('#myModal').modal('hide');
		$('#myModal2').modal('show');
 
 } else {
 	$(".modal-body2").text ("Debes ingresar números")
 }
})

})




});

