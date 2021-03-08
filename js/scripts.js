const btnMenu = document.getElementById('btn_menu');

const navMenu = document.getElementById('menu_nav');

btnMenu.addEventListener('change', (e)=>{
	if(e.target.checked){
	navMenu.classList.add('menu_nav--mostrar')
	}else{
		navMenu.classList.remove('menu_nav--mostrar')
	}
	
}
);

/*EVENTO SCROLL*/
let pasaRecepcion = false
let recepcion = document.getElementById("recepcion")
let contenedorRecepcion = document.getElementById("contenedor_recepcion")
let contenedorPuerta = document.getElementById("contenedor_puerta")
let puertaIzquierda = document.getElementById("puerta_izquierda")
let puertaDerecha = document.getElementById("puerta_derecha")

window.addEventListener('scroll', function() {
	let posRecepcion = recepcion.getBoundingClientRect().top
	let altoPantalla = window.innerHeight
	let topPantalla = window.pageYOffset
	let altoRecepcion = recepcion.offsetHeight
  let distRecepcion = posRecepcion + topPantalla
	/*scrollRecepcion es la distancia a recorrer con scroll hasta el % definido del elemento a mostrar en este caso 50%=0.5*/
	let scrollRecepcion = (distRecepcion - altoPantalla) + (altoRecepcion * 0.5) 
	
	if((topPantalla >= scrollRecepcion) && (!pasaRecepcion)){
		console.log(contenedorRecepcion)
    contenedorRecepcion.classList.add("entrando2")
		contenedorPuerta.classList.add("entrando1")
		puertaIzquierda.classList.add("abrePuertaIzq")
		puertaDerecha.classList.add("abrePuertaDer")
		
			console.log("entra puerta")
		pasaRecepcion = true
	}
	if((topPantalla < scrollRecepcion) && (pasaRecepcion)){
		alert("cierra puerta")
		pasaRecepcion = false
	}
  

	let textoPosicion = document.getElementById("posicion")

//	textoPosicion.textContent = "Posiciones: recepcion="+posRecepcion+"px -  Alto pantalla: "+altoPantalla+"px - Tope actual="+topPantalla+"px - alto recepcion: "+altoRecepcion+"px"
 
//console.log(window.pageYOffset + 'px');
});
