/*Getting the modal*/
var modal = document.getElementById('myModal');

/* Grab the image and place it inside the modal, than use the "alt" text as it's caption*/
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	modalImg.alt = this.alt;
	captionText.innerHTML = this.alt;
}

/*Grab <span> element that closes the modal*/
var span = document.getElementsByClassName("close")[0];

/* User clicks on the (x) to close the modal*/
span.onclick = function(){
	modal.style.display = "none";
}