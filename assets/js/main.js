$(document).ready(function(){

	 setTimeout(function() {
        $(".logo").fadeOut(2500);
    },2000);

	 $(".loader").fadeOut("3500");

 
 $(".logo2").hide(3000);

  setTimeout(function() {
        $(".logo2").fadeIn(2500);
    },2000);
 


	$("#varias").show();
	$(".chilena").hide();
	$(".colombianas").hide();
	$(".mexicanas").hide();

	$("#chile").click(function(){
		$(".chilena").show();
		$("#varias").hide();
		$(".colombianas").hide();
		$(".mexicanas").hide();
	
	})

	$("#colombia").click(function(){
		$(".chilena").hide();
		$("#varias").hide();
		$(".colombianas").show();
		$(".mexicanas").hide();
	
	})

	$("#mexico").click(function(){
		$(".chilena").hide();
		$("#varias").hide();
		$(".colombianas").hide();
		$(".mexicanas").show();
	
	})
 

	$(".chile1").mouseover(function(){
		 $(this).append("<p>Empanadas</p>"); 
	})
	
	$(".chile1").mouseup(function(){
		 $(this).remove("<p>Empanadas</p>"); 
	})

	$(".chile2").mouseover(function(){
		 $(this).append("<p>Charquicán</p>");
		 
	})

$(".chile3").mouseover(function(){
		 $(this).append("<p>Cazuela</p>");
		 
	})

$(".chile4").mouseover(function(){
		 $(this).append("<p>Sopaipilla</p>");
		 
	})

$(".chile5").mouseover(function(){
		 $(this).append("<p>Humita</p>");
		 
	})

$(".chile6").mouseover(function(){
		 $(this).append("<p>Choripan</p>");
		 
	})



});

