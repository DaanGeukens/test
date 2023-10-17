var keergeklikt = 0;
let eindespel = "Spel uitgespeeld";
var animaties = ['horanim', 'vertanim']
var ver = 'horanim';
var hor = 'vertanim';
function cirkel1() {
	
	keergeklikt++;
	document.getElementById("test5").innerHTML = keergeklikt;
	
	var hoogte = parseInt(document.getElementById("test5").style.height )
	hoogte = hoogte - 1;
	document.getElementById("test5").style.height = hoogte + 'px'

	document.getElementById("test5").innerHTML = keergeklikt;
	var breedte = parseInt(document.getElementById("test5").style.width)		
	breedte = breedte - 1;
	document.getElementById("test5").style.width = breedte + 'px'
	console.log('geklikt op de cirkel')

		if (keergeklikt > 14) {
			console.log('Einde spel')
			document.getElementById("5pxgroot").innerHTML = eindespel;
			playagainbutton()
		}
		
	var test = document.getElementById("test5");
	var hhh = animaties[(Math.floor(Math.random() * animaties.length))];
	test.classList.value =  hhh
	console.log(hhh);
}
var tijd = 0
document.onload = begin()

function begin() {
	console.log('begin')
	setInterval(tijdfunctie, 1000);
}

function tijdfunctie(){
	tijd++
	document.getElementById('tijdbijhouden').innerHTML = "Tijd " +tijd + " seconden"
}

function playagainbutton() {
	document.getElementById('playagain').style.display = 'block'
}

function playagain2(){
	document.getElementById('playagain').style.display = 'none'
	document.getElementById('5pxgroot').innerHTML = "";
	playagain3()
}

function playagain3() {
	keergeklikt = 0
	tijd = 0
	document.getElementById('test5').style.height = "100px";
	document.getElementById('test5').style.width = "100px";
}
