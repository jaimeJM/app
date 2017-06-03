$(document).on('ready',function(){
	


$(document).ready(main);





var contador = 1 ;

function main() {


	$('.menu_bar').click(function(){

//$("nav").toggle(800);

 	if (contador == 1) {

 						$('nav').animate({

 											
    										left: '0'
    										
 										},1000);contador=0;
 										}else {
 										   contador =1
 										$('nav').animate({
 															
							 								left: '-100%'
 														},1000);
 						}

									});
				};




				$(".main-nav").on("click",function(){
				$(".main-nav").toggleClass("mostrar");
				});	

				$(".menu-audio").on("click",function(){
				$(".menu-audio").toggleClass("play");
				

				});



				

			
              
			
			$(".titulo").mouseenter(function(){
   			$("audio")[5].play();
			});

			$(".Aa").on("click",function(){

				$("audio")[0].play();
				$(".Aa").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});
			});

				

			$(".Ee").on("click",function(){
					

				$("audio")[1].play();
				$(".Ee").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});	
				
			});

				


			$(".Ii").on("click",function(){

				$("audio")[2].play();
				$(".Ii").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});

			});

				


			$(".Oo").on("click",function(){

				$("audio")[3].play();
				$(".Oo").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});

			});

				


			$(".Uu").on("click",function(){

				$("audio")[4].play();
				$(".Uu").fadeOut(2000, function(){
				$(this).fadeIn(100);
							

				});
			});
});
