"use strict"
	var tijera=document.getElementById("tijera").value
	var piedra=document.getElementById("piedra").value
	var papel=document.getElementById("papel").value
	var columna1=document.getElementById("columna1")
	var imagen1=document.getElementById("jg1")
	var imagen2=document.getElementById("computadora")
	var alerta=document.getElementById("alerta")



	var computadora=Math.ceil(Math.random()*3)
	var computadora2
	
	if(computadora==1){
		computadora2="tijera"
	}else if(computadora==2){
		computadora2="piedra"
	}else if(computadora==3){
		computadora2="papel"
	}	
	console.log(computadora)
	console.log(computadora2)

	var tijeraF=function(){
		imagen1.src="img/tijera.jpg"

		if(tijera===computadora2){
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Empate"
		}else if(tijera!=computadora2 && computadora2===papel ){
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Ganastes"

		}else{
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Perdistes"
		}
		setTimeout("location.reload()", 2000);

	}
	var piedraF=function(){
		imagen1.src="img/piedra.jpg"

		if(piedra===computadora2){
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Empate"
		}else if(piedra!=computadora2 && computadora2===tijera ){
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Ganastes"
		}else{
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Perdistes"

		}
		setTimeout("location.reload()", 2000);

	}

	var papelF=function(){
		imagen1.src="img/papel.jpg"

		if(papel===computadora2){
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Empate"
		}else if(papel!=computadora2 && computadora2===piedra ){
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Ganastes"
		}else{
			imagen2.src="img/"+computadora2+".jpg"
			alerta.innerHTML="Perdistes"

		}
		setTimeout("location.reload()", 2000);

	}