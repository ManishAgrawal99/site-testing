document.addEventListener("DOMContentLoaded",
  function (event){
  	            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                }
            });
			$.ajax({
                url : "/api/order",
                dataType : "json",
                type : "get",
                success: function( data, textStatus, jQxhr ){
                	console.log("Inside get success");
                	var cartHtmlString = "";
                    var cartItems = data;
                    console.log(cartItems.orders.length);

                    //We retrieve the num attribute from json
                    for (var i = 0; i < cartItems.orders.length ; i++) {
                    	cartHtmlString = cartHtmlString + "<div><h4 id='cart-service-name'>Deep Cleaning</h4><h5>Our Service Includes</h5><ul><li>Bathroom, Kitchen, Living Room, Dining Room, Bedroom and Balcony Deep Cleaning</li><li>Dry vacuuming of sofa, curtain and carpets</li><li>Cleaning Time: 4 Hours, Cleaning Staff: 3</li><li>Item Total: Rs 1,000</li></ul></div>";
                    }
                    document.getElementById("cart-contents")
                    .innerHTML = cartHtmlString;

                    var totalPrice =  cartItems.orders.length * 1000;
                    var n = totalPrice.toString();

                    document.getElementById("cart-total-price")
                    .innerHTML = "Total: Rs " + n;

                    document.getElementById("summary-order-total")
                    .innerHTML = "Order Total: Rs " + n;



                },
                error: function( jqXhr, textStatus, errorThrown ){
                    alert(errorThrown );
                }
            })
  });
