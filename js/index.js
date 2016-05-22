var iconImages = ["facebBW.png", "facebColor.png", "twitterBW.png", "twitterColor.png", "googleBW.png", "googleColor.png"]


function iconoFaceb(number){
	document.getElementById('iconFabe').src = "./images/" + iconImages[number];
}

function iconoTwitter(number){
	document.getElementById('iconTwitter').src = "./images/" + iconImages[number];
}

function iconoGoogle(number){
	document.getElementById('iconGoogle').src = "./images/" + iconImages[number];
}

function ver(number){
	document.getElementById('desplegado' + number).style.display='block';
}

function ocultar (number){
	document.getElementById('desplegado' + number).style.display='none';
}




