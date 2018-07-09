document.addEventListener("DOMContentLoaded",
  function (event){
                $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                }
            });
      $.ajax({
                url : "/api/emp",
                dataType : "json",
                type : "get",
                success: function( data, textStatus, jQxhr ){
                  console.log("Inside get success");
                  var details = data;
                  console.log(details);
                  var personalInfoString = "<table><tbody><tr><td class='portal-fields'>Name</td><td id=''>" + details.EmployeeName + "</td></tr><tr><td class='portal-fields'>Supervisors Name</td><td id=''>" + details.SupervisorID + "</td></tr><tr><td class='portal-fields'>Phone Number</td><td id=''>" + details.PhoneNo + "</td></tr><tr><td class='portal-fields'>Employee ID</td><td id=''>" + details._id + "</td></tr></tbody></table>";
                  //var currentJobString = "<table><tbody><tr><td class='portal-fields'>Customer Name</td><td id=''>" + details.custName + "</td></tr><tr><td class='portal-fields'>Phone Number</td><td id=''>" + details.custPhone + "</td></tr><tr><td class='portal-fields'>Address</td><td id=''>" + details.custAddress+ "</td></tr><tr><td class='portal-fields'>Date & Time</td><td id=''>" + details.custDate + "</td></tr></tbody></table>";

                  document.getElementById("myInfo")
                    .innerHTML = personalInfoString;

                  //document.getElementById("current")
                  //  .innerHTML = currentJobString;
                      
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    alert(errorThrown );
                }
            });

      $.ajax({
                url : "/data/jobs",
                dataType : "json",
                type : "get",
                success: function( data, textStatus, jQxhr ){
                  console.log("Inside get success");
                  var details = data;
                  console.log(details);
                  //var personalInfoString = "<table><tbody><tr><td class='portal-fields'>Name</td><td id=''>" + details.name + "</td></tr><tr><td class='portal-fields'>Supervisors Name</td><td id=''>" + details.supervisor + "</td></tr><tr><td class='portal-fields'>Phone Number</td><td id=''>" + details.phone+ "</td></tr><tr><td class='portal-fields'>Employee ID</td><td id=''>" + details.eid + "</td></tr></tbody></table>";
                  var currentJobString = "<table><tbody><tr><td class='portal-fields'>Customer Name</td><td id=''>" + details.custName + "</td></tr><tr><td class='portal-fields'>Phone Number</td><td id=''>" + details.custPhone + "</td></tr><tr><td class='portal-fields'>Address</td><td id=''>" + details.custAddress+ "</td></tr><tr><td class='portal-fields'>Date & Time</td><td id=''>" + details.custDate + "</td></tr></tbody></table>";

                  //document.getElementById("myInfo")
                  //  .innerHTML = personalInfoString;

                  document.getElementById("current")
                    .innerHTML = currentJobString;
                      
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    alert(errorThrown );
                }
            });
  });
