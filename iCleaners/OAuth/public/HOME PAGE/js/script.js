//Signup-Modal
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openTabs(evt, buttnName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(buttnName).style.display = "block";
    evt.currentTarget.className += " active";
}

/***Signup System***/


document.addEventListener("DOMContentLoaded", loadHome);
document.getElementById("logo-img").addEventListener("click", loadHome);
document.getElementById("brand-name").addEventListener("click", loadHome);


function loadHome() {

    //Loading the home tiles dynamically

            $.ajaxSetup({
            xhrFields: {
            withCredentials: true
            }
            })

            $.ajax({
             url: "https://localhost:3443/services",
             dataType: "json",
             type: "GET",
             success: function( data, textStatus, jQxhr ){
                    console.log("Inside get success");
                    var tilesHtmlString = "";
                    var tiles = data;
                    console.log(tiles);
                                      
                    tilesHtmlString= "<div class='col-md-2 col-sm-4 col-xs-6'><div id='dc-tile'><span>"+tiles[0].name+"</span></div></div><div class='col-md-2 col-sm-4 col-xs-6'><div id='sc-tile'><span>"+tiles[1].name+"</span></div></div><div class='col-md-2 col-sm-4 col-xs-6'><div id='bc-tile'><span>"+tiles[2].name+"</span></div></div><div class='col-md-2 col-sm-4 col-xs-6'><div id='cs-tile'><span>"+tiles[3].name+"</span></div></a></div><div class='col-md-2 col-sm-4 col-xs-6'><div id='kc-tile'><span>"+tiles[4].name+"</span></div></div><div class='col-md-2 col-sm-4 col-xs-6'><div id='as-tile'><span>"+tiles[5].name+"</span></div></div>";

                    homePageString = "<div class='jumbotron'><img src='images/jumbotron_768.jpg' alt='Picture of Services' class='img-responsive visible-xs'></div><div id='home-tiles' class='row'>" + tilesHtmlString + "</div>";

                    document.getElementById("main-content")
                    .innerHTML = homePageString;

                     //Setting up the tiles to check on which service is clicked
                        document.getElementById("dc-tile").addEventListener("click", ()=>{
                            //console.log("chal ja");
                            loadServicePage("5b6b37bb8d187c10d01fb1f8");
                        });
                        document.getElementById("sc-tile").addEventListener("click", ()=>{
                            loadServicePage("5b6b37fa8d187c10d01fb1f9");
                        });
                        document.getElementById("bc-tile").addEventListener("click", ()=>{
                            loadServicePage("5b6b380e8d187c10d01fb1fa");
                        });
                        document.getElementById("cs-tile").addEventListener("click", ()=>{
                            loadServicePage("5b6b38338d187c10d01fb1fb");
                        });
                        document.getElementById("kc-tile").addEventListener("click", ()=>{
                            loadServicePage("5b6b38508d187c10d01fb1fc");
                        });
                        document.getElementById("as-tile").addEventListener("click", ()=>{
                            loadServicePage("5b6b386c8d187c10d01fb1fd");
                        });
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    alert(errorThrown );
                }
          });


    //For the services page

     function loadServicePage(id){
        console.log(id);
        window.location.href = "https://localhost:3443/home/"+id;
     }

    
    //When pressing Login button
    // document.getElementById("loginSubmit").addEventListener("click", function () {
    //         console.log('Login button pressed');
    //         var pass = document.getElementById("pass1").value;
    //         console.log(pass);
    //         var usernameField = document.getElementById("emailField").value;
    //         console.log(usernameField);

    //         var loginRequest = {
    //             "username": usernameField,
    //             "password": pass
    //         }    

    //         $.ajax({
    //               type: "POST",
    //               beforeSend: function(request) {
    //                 request.setRequestHeader("Content-Type", "application/json");
    //               },
    //               url: "ttps://localhost:3443/users/login",
    //               data: "json=" + escape(JSON.stringify(loginRequest)),
    //               processData: false,
    //               success: function(msg) {
    //                 if (res.statusCode == 200) {
    //                     alert("You have successfully logged in");
    //                     console.log(msg);
    //                     window.localStorage.setItem(jwtToken, res.body.token);
    //                     console.log(window.localStorage.getItem(jwtToken));

    //                 }
    //                 else{
    //                     console.log(error);
    //                 }
    //               }
    //         });


    // });    
};
