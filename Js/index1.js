(function () {
var preload = document.getElementById('cargado');
var loading = 0;
var id = setInterval(frame, 110);
function frame(){
	if (loading == 100) {
		clearInterval(id);
		window.open("C:/Users/JM/Desktop/aplicacion/Html/principal.html", "_self");
		}
		else {
			loading = loading + 1;
			if (loading == 90) {
				preload.style.animation = "fadeout 1s ease";
			}
		}
	  }
	
})();