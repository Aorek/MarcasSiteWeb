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

function verMenu(){
	document.getElementById('desplegado').style.display='block';
}

function ocultarMenu(){
	document.getElementById('desplegado').style.display='none';
}




