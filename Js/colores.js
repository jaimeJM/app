$(document).on('ready',function(){
	


$(".menu_bar").on("click", function(){


 $(".icon-menu").toggleClass("icon-cross");

});







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

			$('.submenu').click(function(){
			$(this).children('.children').slideToggle();
			});
				
              
			
			$(".titulo").mouseenter(function(){
   			$("audio")[5].play();
			});

			$(".a1").on("click",function(){

				$("audio")[0].play();
				$(".a1").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});
			});

				

			$(".b2").on("click",function(){
					

				$("audio")[1].play();
				$(".b2").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});	
				
			});

				


			$(".c3").on("click",function(){

				$("audio")[2].play();
				$(".c3").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});

			});

			$(".d4").on("click",function(){

				$("audio")[3].play();
				$(".d4").fadeOut(2000, function(){
				$(this).fadeIn(100);
				
				});

			});

			$(".e5").on("click",function(){

				$("audio")[4].play();
				$(".e5").fadeOut(2000, function(){
				$(this).fadeIn(100);
							

				});
			});

			$(".f6").on("click",function(){

				$("audio")[5].play();
				$(".f6").fadeOut(2000, function(){
				$(this).fadeIn(100);
							

				});
			});

			$(".g7").on("click",function(){

				$("audio")[6].play();
				$(".g7").fadeOut(2000, function(){
				$(this).fadeIn(100);
							

				});
			});

			$(".h8").on("click",function(){

				$("audio")[7].play();
				$(".h8").fadeOut(2000, function(){
				$(this).fadeIn(100);
							

				});
			});

			$(".i9").on("click",function(){

				$("audio")[8].play();
				$(".i9").fadeOut(2000, function(){
				$(this).fadeIn(100);
							

				});
			});

			$(".j10").on("click",function(){

				$("audio")[9].play();
				$(".j10").fadeOut(2000, function(){
				$(this).fadeIn(100);
							

				});
			});


});