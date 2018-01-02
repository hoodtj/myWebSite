/*College dropdown menu when clicked*/
/*Toggle between showing and hiding content*/
function myFunctionHighSchool(){
  document.getElementById("highSchoolDropdown").classList.toggle("show");
}

window.onclick = function(event){
  if(!event.target.matches('.dropbtn2')){
	
	  var dropdowns = document.getElementsByClassName("dropdown-content-highschool");
		var i;
		for (i = 0; i < dropdowns.length; i++){
		  var openDropdown = dropdowns [i];
			if (openDropdown.classList.contains('show')){
			  openDropdown.classList.remove('show');
			}
		}
	}
}