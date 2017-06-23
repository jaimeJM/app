$(document).on('ready',function(){
	

$(".autobus").mouseenter(function(){
   			$("audio")[0].play();
   			$("audio")[1].play();
			});

$(".avion").mouseenter(function(){
   			$("audio")[2].play();
			});
$(".avion1").mouseenter(function(){
   			$("audio")[2].play();
			});





$(".menu_bar").on("click", function(){
	$("audio")[3].play();
	$(".icon-menu").toggleClass("icon-cross");
	$(".menu_bar").toggleClass("otra");
});

$(".arbol").mouseenter(function(){
   			$("audio")[4].play();
			});
$(".arbol1").mouseenter(function(){
   			$("audio")[4].play();
			});

$(".loader1").mouseenter(function(){
   			$("audio")[5].play();
			});
$(".loader2").mouseenter(function(){
   			$("audio")[5].play();
			});
$(".loader3").mouseenter(function(){
   			$("audio")[5].play();
			});
$(".loader4").mouseenter(function(){
   			$("audio")[5].play();
			});
$(".loader5").mouseenter(function(){
   			$("audio")[5].play();
			});
$(".loader6").mouseenter(function(){
   			$("audio")[5].play();
			});
$(".loader7").mouseenter(function(){
   			$("audio")[5].play();
			});
$(".caballo").mouseenter(function(){
   			$("audio")[6].play();
			});
$(".caballo1").mouseenter(function(){
   			$("audio")[6].play();
			});

$(document).ready(main);


var contador = 1 ;

function main() {


	$('.menu_bar').click(function(){

//$("nav").toggle(800);

 	if (contador == 1) {

 						$('nav').animate({

 											
    										left: '0'
    										
 										},700);contador=0;
 										}else {
 										   contador =1
 										$('nav').animate({
 															
							 								left: '-100%'
 														},700);
 												}
									});
				};


});


				