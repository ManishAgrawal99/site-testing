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




document.addEventListener("DOMContentLoaded",
  function (event) {
    
    //When pressing signup button
    document.getElementById("signupSubmit").addEventListener("click", function () {
            console.log('signup button pressed');
            // Call server to get the name
            var pass = document.getElementById("pass1").value;
            
            if (pass == "") {
              console.log("Empty Password");
            }
            else{
              console.log(pass);
              document.getElementById("header-signup").innerHTML = pass;
              modal.style.display = "none";

            }
    });
    
});


// $ajaxUtils
//           .sendGetRequest("data/name.json", 
//             function (res) {
//               console.log('Inside Response');
//               var message = res.firstName + " " + res.lastName;
//               console.log(message);
//               document.getElementById("header-signup").textContent=message;
//               document.getElementById("header-signup").onclick = function(){
//               window.location.href = "user-account.html"
//               modal.style.display = "none";
//               };
//               //modal.style.display = "none";
//             });


// //Posting Method 1
// var arr = { City: 'Moscow', Age: 25 };
// $.ajax({
//     url: 'Ajax.ashx',
//     type: 'POST',
//     data: JSON.stringify(arr),
//     contentType: 'application/json; charset=utf-8',
//     dataType: 'json',
//     async: false,
//     success: function(msg) {
//         alert(msg);
//     }
// });

// //Posting Method 2
// $.ajax({
//     url: 'users.php',
//     dataType: 'json',
//     type: 'post',
//     contentType: 'application/json',
//     data: JSON.stringify( { "first-name": $('#first-name').val(), "last-name": $('#last-name').val() } ),
//     processData: false,
//     success: function( data, textStatus, jQxhr ){
//         $('#response pre').html( JSON.stringify( data ) );
//     },
//     error: function( jqXhr, textStatus, errorThrown ){
//         console.log( errorThrown );
//     }
// });

// //Check this to have a look at post method
// //https://api.jquery.com/jquery.post/