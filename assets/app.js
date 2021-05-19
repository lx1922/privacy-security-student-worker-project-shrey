(function() {
	"use strict";
	var x = document.getElementById("hidden-container");
	x.style.display = "none";
	// Add Scripts Here 
})();

function toggle() {
	var x = document.getElementById("hidden-container");
	var y = document.getElementById("show_details");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  y.innerHTML = "Hide Details";
	} else {
	  x.style.display = "none";
	  y.innerHTML = "Show Details";
	}
  }