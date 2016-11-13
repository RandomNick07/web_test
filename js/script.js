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
	$("body").css("background", "url('../imagenes/pepebg.gif')");
}

function resolver() {
	$("#tomarValor").on("click", function() {
		var a = $("#varA").val();
		var b = $("#varB").val();
		var c = $("#varC").val();
		formulaResolvente(a, b, c);
	})
}

function changelog() {
	$("#changelog").on("click", function() {
		$("body").append("<div id='changelog-panel'></div>");
		var panel = $("#changelog-panel");
		panel.css({
			"width": "500px",
			"height": "300px",
			"background-color": "white",
			"border": "1px solid black",
			"z-index": "100",
			"position": "fixed",
			"top": "100px",
			"left": "440px"
		});
		panel.html("<span id='texto-changelog'><h4>Changelog</h4><ol id='listaUpdates'></ol><span>");
		$("#texto-changelog").css({
			"position": "relative",
			"margin": "auto",
			"text-align": "center",
			"font-size": "24px",
			"display": "block"
		});
		panel.append("<button id='changelogButton'><span>CERRAR</span></button>");
		updateChangelog();
		function cerrar() {
			$("#changelogButton").on("click", function() {
				$("#changelog-panel").remove();
				})
		}	
		cerrar();
	})
}



//Changelog updates
function updateChangelog() {
	var lista = $("#listaUpdates");
	lista.html("<li>12/11/2016: Primer día online de Turrul's Web.</li><li>13/11/2016: Creado el Changelog.</li><li>13/11/2016: Agregada la sección NamelessChannel.</li>");
	lista.css("font-size", "14px");
}


$(document).ready(function(){
	resolver();
	changelog();
	
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
		mensajes.html("Esta es una web en desarrollo, por lo cual, momentáneamente no posee mayores funcionalidades.");
		mensajes.css("visibility", "visible");
		mensajes.css("padding-top", "20px");
		function ocultar() {
			mensajes.css("visibility", "hidden");
		}
		setTimeout(ocultar, 4000);
	}
	
	function mensaje2() {
		mensajes.html("¡Ya está disponible el Changelog! Puedes verlo presionando sobre el botón bajo el menú.");
		mensajes.css("visibility", "visible");
		mensajes.css("padding-top", "20px");
		function ocultar() {
			mensajes.css("visibility", "hidden");
		}
		setTimeout(ocultar, 4000);
	}

	setTimeout(saludo, 800);
	setTimeout(mensaje1, 10000);
	setTimeout(mensaje2, 20000);
})