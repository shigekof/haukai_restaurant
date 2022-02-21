/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleHeadingClass() {
	const heading = document.getElementById("heading");
	if (heading.className === "heading") {
		heading.className += " active";
	} else {
		heading.className = "heading";
	}
  }