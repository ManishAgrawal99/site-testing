//Signup-Modal
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("header-signup").addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = res.firstName + " " + res.lastName
              console.log(message);
              document.getElementById("header-signup").textContent=message;
              document.getElementById("header-signup").onclick = function(){
              window.location.href = "index.html";


              };
            });
      });


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