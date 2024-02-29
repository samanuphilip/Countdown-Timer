 // Set the date we're counting down to
 var countDownDate = new Date().getTime() + (10*24*60*60*1000);

 // Update the countdown every 1 second
 var x = setInterval(function() {

     // Get the current date and time
     
     var now = new Date().getTime();
     

     // Calculate the remaining time
     var distance = countDownDate - now;

     // Calculate days, hours, minutes, and seconds
     var days = Math.floor(distance / (86400000));
     var hours = Math.floor((distance % (86400000)) / (3600000));
     var minutes = Math.floor((distance % (3600000)) / (60000));
     var seconds = Math.floor((distance % (60000)) / 1000);

     // Display the countdown
     document.getElementById("countdown").innerHTML = days + "D : " + hours + "H : " +
         minutes + "Min : " + seconds + "Sec  ";

     // If the countdown is over, display a message
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("countdown").innerHTML = "EXPIRED";
     }
 }, 1000);

// Define a variable to get the date at the time.
var currentdate = new Date();

// Define a variable to display the date 10 days from the current date.
var tendaysfromnow = new Date();
tendaysfromnow.setDate (currentdate.getDate() + 10);

// Format the variables to strings to be displayed.
var formatteddate = tendaysfromnow.toDateString();
var formattedcurrentdate = currentdate.toDateString();

// Display the formatted strings in the place of the respective HTML ID.
document.getElementById ('currentdate').innerHTML = "Current Date: " + formattedcurrentdate;
document.getElementById ('tendaysfromnow').innerHTML = "This Giveaway ends: " + formatteddate;



