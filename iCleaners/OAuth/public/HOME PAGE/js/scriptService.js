
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


document.addEventListener("DOMContentLoaded", loadServicePage);



function loadServicePage(){

  var currLocation = window.location.href;
  console.log(currLocation);
  var serviceId = currLocation.slice(28,52);
  console.log(serviceId);

  $.ajaxSetup({
            xhrFields: {
            withCredentials: true
            }
            })

            $.ajax({
             url: "https://localhost:3443/services/"+serviceId,
             dataType: "json",
             type: "GET",
             success: function( data, textStatus, jQxhr ){

                    var extract = data;

                    var serviceHtmlString = "<div class='service-des-left col-sm-6 col-xs-12'><h2>"+extract.name+"</h2><div class='page1_grid'><div class='box'><h1>AA</h1><h3>Reliable Services</h3><p>All our technicians are wel trained and are experienced in keeping the appliances clean</p></div><div class='box'><h1>AB</h1><h3>Convenient</h3><p>Our platform is designed keeping in mind your convenience, so you select the date and time of our visit</p></div><div class='box'><h1>AC</h1><h3>We Provide</h3><p><ul><li>Complete deep cleaning of all areas of the house inlcuding Bathroom, Kitchen, Living Room, Dining Room, Bedroom and balcony.</li><li>Deep Cleaning and cleaning of curtains, sofa set and chairs using Professional grade cleaning solutions, cleaning equipment and vacuum cleaners by professionals cleaning staff</li></ul></p></div></div></div><hr class='visible-xs'><div class='service-des-right col-sm-6 col-xs-12'><div id='service-img'><img src='./images/restaurant-logo.png'></div><p id=service-dynamic-des'>"+extract.description+"</p><div class='dropdown'><button id='house-type-selected' onclick='myFunction()' class='dropbtn'>House Type</button><div id='myDropdown' class='dropdown-content'><a id='homedrp' value='home'>1 BHK</a><a id='aboutdrp' value='about'>2 BHK</a><a id='contactdrp' value='contact'>3 BHK</a></div></div><div class='next-button pull-right'><a href='cart.html'>next</a></div></div>"


                    document.getElementById("main-content")
                    .innerHTML = serviceHtmlString;

                },
                error: function( jqXhr, textStatus, errorThrown ){
                    alert(errorThrown );
                }
          });


}




