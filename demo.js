var button = document.getElementsByTagName("button");
var nav = document.getElementsByTagName("nav");

function over(){
				button[0].classList.toggle("toggled");
nav[0].classList.toggle("move");
				}

button[0].addEventListener("click", over);
