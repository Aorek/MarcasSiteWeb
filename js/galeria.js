window.addEventListener ('load',intervaloGaleria);
var i = 1;

function intervaloGaleria(){
	setInterval('galeria()',5000);
}

function stopInterval(){
	clearInterval(interval);
}

function galeria(){
	if (i < 8){
		document.getElementById('imageGaleria').src ="./images/escuela/escuela" + i + ".jpg";
		i++;
	}else{
		i = 1;
		galeria();
	}
}

function galeriaNext(){
	i++; 
	if(i > 8){
		i = 1;
	}
	document.getElementById('imageCarrusel').src="./images/escuela/escuela" + i + ".jpg";
}

function galeriaPrev(){
	i--; 
	if(i < 1){
		i = 4;
	}
	document.getElementById('imageGaleria').src="./images/escuela/escuela" + i + ".jpg";
}

function cambiarFlechaPrev(str){
	document.getElementById('prev').src = './images/prev' + str + ".png";
}

function cambiarFlechaNext(str){
	document.getElementById('next').src = './images/next'+str+".png";
}