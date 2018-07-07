//Signup-Modal
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/**Service page dropdown**/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("homedrp").addEventListener("click", getHomeSelectedValue);
document.getElementById("aboutdrp").addEventListener("click", getAboutSelectedValue); 
document.getElementById("contactdrp").addEventListener("click", getContactSelectedValue);

function getHomeSelectedValue() {
    var selectedValue = "home";
    console.log(selectedValue);
    document.getElementById("house-type-selected").textContent=selectedValue;
}
function getAboutSelectedValue() {
    var selectedValue = "About";
    console.log(selectedValue);
    document.getElementById("house-type-selected").textContent=selectedValue;
}
function getContactSelectedValue() {
    var selectedValue = "contact";
    console.log(selectedValue);
    document.getElementById("house-type-selected").textContent=selectedValue;
}


