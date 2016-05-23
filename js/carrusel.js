window.addEventListener ('load',intervaloCarrusel);
var i = 1;

function intervaloCarrusel(){
	setInterval('carrusel()',5000);
}

function stopInterval(){
	clearInterval(interval);
}

function carrusel(){
	if (i < 5){
		document.getElementById('imageCarrusel').src ="./images/fotos/niños" + i + ".jpg";
		i++;
	}else{
		i = 1;
		carrusel();
	}
}

function carruselNext(){
	i++; 
	if(i > 4){
		i = 1;
	}
	document.getElementById('imageCarrusel').src="./images/fotos/niños" + i + ".jpg";
}

function carruselPrev(){
	i--; 
	if(i < 1){
		i = 4;
	}
	document.getElementById('imageCarrusel').src="./images/fotos/niños" + i + ".jpg";
}

function cambiarFlechaPrev(str){
	document.getElementById('prev').src = './images/prev' + str + ".png";
}

function cambiarFlechaNext(str){
	document.getElementById('next').src = './images/next'+str+".png";
}