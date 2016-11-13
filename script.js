/*function formulaResolventeAlt(a, b, c) {
	var raiz = Math.sqrt(b * b - 4 * a* c);
	var numerador1 = -b + raiz;
	var numerador2 = -b - raiz;
	var denominador = 2 * a;
	var x1 = numerador1 / denominador;
	var x2 = numerador2 / denominador;
	console.log("X1 = " + x1);
	console.log("X2 = " + x2);
}*/

function formulaResolvente(a, b, c) {
	var x1 = (-b + Math.sqrt(b * b - 4 * a * c))/(2 * a);
	var x2 = (-b - Math.sqrt(b * b - 4 * a * c))/(2 * a);
	alert("El valor de X1 es " + x1 + " y el de X2 es " + x2);
}

function pepe() {
	$("body").css("background", "url('pepebg.gif')");
}

function resolver() {
	$("#tomarValor").on("click", function() {
		var a = $("#varA").val();
		var b = $("#varB").val();
		var c = $("#varC").val();
		formulaResolvente(a, b, c);
	})
}

$(document).ready(function(){
	resolver();
	var mensajes = $("#mensajes");
	
	function saludo() {
			var nombre = prompt("¿Cómo te llamas?");
			mensajes.html("¡Bienvenido/a a la página, "+nombre+"!");
			mensajes.css("visibility", "visible");
			function ocultar() {
				mensajes.css("visibility", "hidden");
			}
			setTimeout(ocultar, 4000);
			/*if(nombre.length == 0) { saludo(); }
			alert("¡Bienvenido a Turrul's Web, " + nombre + "!");*/
	}

	function mensaje1() {
		mensajes.html("Esta es una página en desarrollo, por lo cual, momentáneamente no posee mayores funcionalidades.");
		mensajes.css("visibility", "visible");
		mensajes.css("padding-top", "20px");
		function ocultar() {
			mensajes.css("visibility", "hidden");
		}
		setTimeout(ocultar, 4000);
	}

	setTimeout(saludo, 800);
	setTimeout(mensaje1, 10000);
})