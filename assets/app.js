(function() {
	"use strict";
	var x = document.getElementById("hidden-container");
	x.style.display = "none";
	// Add Scripts Here 
})();

function toggle() {
	var x = document.getElementById("hidden-container");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }